/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { IUserDataHook, UserData } from 'types/UserData.types';
import { auth, firestore } from 'lib/firebase/firebase.config.js';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IRelativeForm } from 'modules/form/containers/RelativeForm/RelativeForm';
import { v4 as uuidv4 } from 'uuid';

const defaultUserData: UserData = {
    userName: '',
    byBus: {
        onArrive: false,
        onOutward: false,
    },
    raffle: {
        isInvolved: false,
    },
    relatives: [],
    aditionalInfo: '',
};

export function useUserData(): IUserDataHook {
    const [user] = useAuthState(auth as any);

    const [userData, setUserData] = useState<UserData | null>(null);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    const createUser = async (
        userID: string | undefined,
        userName: string | null | undefined
    ): Promise<void> => {
        const ref = firestore.collection('users').doc(userID);

        const docSnapshot = await ref.get();

        const docAlreadyCreated = docSnapshot.exists;

        if (docAlreadyCreated) {
            return;
        }

        ref.set({ ...defaultUserData, userName });
    };

    const updateTravelData = async (
        name: string,
        value: boolean
    ): Promise<void | null> => {
        if (user && userData) {
            const { byBus } = userData;

            return firestore
                .collection('users')
                .doc(user.uid)
                .update({
                    byBus: {
                        ...byBus,
                        ...{ [name]: value },
                    },
                });
        }

        return null;
    };

    const updateAdditionalInfo = async (
        newValue: string
    ): Promise<void | null> => {
        if (user && userData) {
            return firestore
                .collection('users')
                .doc(user.uid)
                .update({ aditionalInfo: newValue });
        }
        return null;
    };

    const addNewRelative = async ({
        name,
        child,
        vegetarian,
        vegan,
        allergies,
    }: IRelativeForm): Promise<void | null> => {
        if (user && userData) {
            const { relatives } = userData;

            const username = uuidv4();

            return firestore
                .collection('users')
                .doc(user.uid)
                .update({
                    relatives: relatives
                        ? [
                              ...relatives,
                              {
                                  name,
                                  child,
                                  vegetarian,
                                  vegan,
                                  allergies,
                                  username,
                              },
                          ]
                        : [
                              {
                                  name,
                                  child,
                                  vegetarian,
                                  vegan,
                                  allergies,
                                  username,
                              },
                          ],
                });
        }

        return null;
    };

    const editRelative = async ({
        name,
        child,
        vegetarian,
        vegan,
        allergies,
        username,
    }: any): Promise<void | null> => {
        if (user && userData) {
            const { relatives } = userData;

            const editedRelatives = relatives.map((rel) => {
                if (rel.username === username) {
                    return {
                        name,
                        child,
                        vegetarian,
                        vegan,
                        allergies,
                        username,
                    };
                }

                return rel;
            });

            // TODO: utiliza la libreria de random ui
            return firestore.collection('users').doc(user.uid).update({
                relatives: editedRelatives,
            });
        }

        return null;
    };

    const removeRelative = async (username: string): Promise<void | null> => {
        if (user && userData) {
            const { relatives } = userData;

            const newRelatives = relatives.filter(
                (relative) => relative.username !== username
            );

            return firestore
                .collection('users')
                .doc(user.uid)
                .update({ relatives: newRelatives });
        }

        return null;
    };

    useEffect(() => {
        let unsubscribe;

        if (user) {
            const ref = firestore.collection('users').doc(user.uid);

            unsubscribe = ref.onSnapshot((doc: any): void => {
                setUserData(doc.data() as UserData);
                setLoadingUser(false);
            });
        } else {
            setUserData(null);
        }

        return unsubscribe;
    }, [user]);

    return {
        userData,
        loadingUser,
        createUser,
        updateTravelData,
        updateAdditionalInfo,
        addNewRelative,
        removeRelative,
        editRelative,
    };
}
