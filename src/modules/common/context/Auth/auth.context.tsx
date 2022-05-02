/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useEffect, useMemo, useState } from 'react';

import { ContextProviderProps } from 'modules/common/types/Context.types';
import { auth } from 'lib/firebase/firebase.config.js';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

interface IAuthContext {
    user: any;
    error: any;
    loading: boolean;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthContextProvider({
    children,
}: ContextProviderProps): JSX.Element {
    const [user, setUser] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);

        setLoading(false);

        return () => unsubscribe();
    }, []);

    const contextValue = useMemo(
        () => ({ user, error, loading, isAuthenticated: !!user }),
        [user, error, loading]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
