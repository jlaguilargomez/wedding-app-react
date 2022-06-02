import { useUserData } from 'hooks/useUserData/useUserData';
import React, { createContext, useMemo } from 'react';
import { ContextProviderProps } from 'types/Context.types';
import { IUserDataHook } from 'types/UserData.types';

export const UserDataContext = createContext<IUserDataHook>(
    {} as IUserDataHook
);

// const initialState = {};

export function UserDataProvider({
    children,
}: ContextProviderProps): JSX.Element {
    const {
        userData,
        loadingUser,
        createUser,
        updateTravelData,
        updateAdditionalInfo,
        addNewRelative,
        removeRelative,
        editRelative,
    } = useUserData();

    const contextValue = useMemo(
        () => ({
            userData,
            loadingUser,
            createUser,
            updateTravelData,
            updateAdditionalInfo,
            addNewRelative,
            removeRelative,
            editRelative,
        }),
        [userData, loadingUser]
    );

    return (
        <UserDataContext.Provider value={contextValue}>
            {children}
        </UserDataContext.Provider>
    );
}
