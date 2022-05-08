/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { UserData } from 'modules/common/types/UserData.types';
import { auth, firestore } from 'lib/firebase/firebase.config.js';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

interface IUseUserData {
    userData: any;
}

export const useUserData = (): IUseUserData => {
    const [user] = useAuthState(auth as any);
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        // turn off realtime subscription
        let unsubscribe;

        if (user) {
            const ref = firestore.collection('users').doc(user.uid);

            unsubscribe = ref.onSnapshot((doc: any): void => {
                setUserData(doc.data() as UserData);
            });
        } else {
            setUserData(null);
        }

        return unsubscribe;
    }, [user]);

    return { userData };
};
