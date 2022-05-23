/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { UserData } from 'types/UserData.types';
import { auth, firestore } from 'lib/firebase/firebase.config.js';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IRelativeForm } from 'modules/form/containers/RelativeForm/RelativeForm';

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

interface IUseUserData {
    userData: UserData | null;
    loadingUser: boolean;
    createUser: (
        userID: string | undefined,
        userName: string | null | undefined
    ) => Promise<void>;
    updateTravelData: (name: string, value: boolean) => Promise<void | null>;
    updateAdditionalInfo: (newValue: string) => Promise<void | null>;
    addNewRelative: (relativeInfo: IRelativeForm) => Promise<void | null>;
    removeRelative: (username: string) => Promise<void | null>;
    editRelative: (relativeInfo: any) => Promise<void | null>;
}
// TODO: Podria crear un hook que se encargue solo de hacer el CRUD de los datos
export const useUserData = (): IUseUserData => {
    const [user] = useAuthState(auth as any);

    const [userData, setUserData] = useState<UserData | null>(null);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    const createUser = async (
        userID: string | undefined,
        userName: string | null | undefined
    ): Promise<void> => {
        const ref = firestore.doc(`users/${userID}`);

        const batch = firestore.batch();

        batch.set(ref, { ...defaultUserData, userName });

        await batch.commit();
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

            console.log(relatives);

            // TODO: utiliza la libreria de random ui
            const username = String(Math.random());

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
        console.log('Use Data hook');
        // turn off realtime subscription
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
};
