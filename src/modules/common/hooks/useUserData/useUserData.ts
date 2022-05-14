/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { UserData } from 'modules/common/types/UserData.types';
import { auth, firestore } from 'lib/firebase/firebase.config.js';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

interface IUseUserData {
    userData: UserData | null;
    loadingUser: boolean;
    updateTravelData: (name: string, value: boolean) => Promise<void | null>;
}

export const useUserData = (): IUseUserData => {
    const [user] = useAuthState(auth as any);

    const [userData, setUserData] = useState<UserData | null>(null);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);

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

    useEffect(() => {
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

    return { userData, loadingUser, updateTravelData };
};
