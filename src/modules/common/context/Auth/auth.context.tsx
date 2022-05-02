/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useEffect, useMemo, useState } from 'react';

import {
    ContextProviderProps,
    ProviderValueState,
} from 'modules/common/types/Context.types';
import { auth } from 'lib/firebase/firebase.config.js';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

interface IAuthContext {
    authData: any;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<ProviderValueState<IAuthContext>>(
    {} as ProviderValueState<IAuthContext>
);

const initialState = {
    authData: undefined,
    isAuthenticated: false,
};

export function AuthContextProvider({
    children,
}: ContextProviderProps): JSX.Element {
    const [state, setState] = useState<any>(initialState);
    // const [user, setUser] = useState<any>();
    const [error, setError] = useState<any>();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), setState, setError);

        // console.log('user', user);
        console.log('error', error);
        setState({ authData: auth, isAuthenticated: true });
        return () => unsubscribe();
    }, [auth]);

    const contextValue = useMemo(
        () => ({ state, setState }),
        [state, setState]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
