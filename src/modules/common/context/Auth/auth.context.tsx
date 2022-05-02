import React, { createContext, useEffect, useMemo, useState } from 'react';

import { ContextProviderProps } from 'modules/common/types/Context.types';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';

interface IAuthContext {
    user: User | null | undefined;
    error: Error | undefined;
    loading: boolean;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthContextProvider({
    children,
}: ContextProviderProps): JSX.Element {
    const [user, setUser] = useState<User | null>();
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            getAuth(),
            (userData: User | null) => {
                setUser(userData);
                setLoading(false);
            },
            setError
        );

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
