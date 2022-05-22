import { useUserData } from 'hooks/useUserData/useUserData';
import React, { createContext, useMemo } from 'react';
import { ContextProviderProps } from 'types/Context.types';
import { UserData } from 'types/UserData.types';

interface IUserDataContext {
    userData: UserData | null;
    // loadingUser: boolean;
    createUser: (
        userID: string | undefined,
        userName: string | null | undefined
    ) => Promise<void>;
    // updateTravelData: (name: string, value: boolean) => Promise<void | null>;
    // addNewRelative: (relativeInfo: IRelativeForm) => Promise<void | null>;
    // removeRelative: (username: string) => Promise<void | null>;
    // editRelative: (relativeInfo: any) => Promise<void | null>;
}

export const UserDataContext = createContext<IUserDataContext>(
    {} as IUserDataContext
);

// const initialState = {};

export function UserDataProvider({
    children,
}: ContextProviderProps): JSX.Element {
    const { userData, createUser } = useUserData();

    const contextValue = useMemo(() => ({ userData, createUser }), [userData]);

    return (
        <UserDataContext.Provider value={contextValue}>
            {children}
        </UserDataContext.Provider>
    );
}
