import React, { createContext, useMemo, useState } from 'react';
import { ContextProviderProps, ProviderValueState } from 'types/Context.types';
import { UserData } from 'types/UserData.types';

interface IUserDataContext {
    userData: UserData;
}

export const UserDataContext = createContext<
    ProviderValueState<IUserDataContext>
>({} as ProviderValueState<IUserDataContext>);

const initialState = {};

export function UserDataProvider({
    children,
}: ContextProviderProps): JSX.Element {
    const [state, setState] = useState<IUserDataContext>(
        initialState as IUserDataContext
    );

    const contextValue = useMemo(
        () => ({ state, setState }),
        [state, setState]
    );

    return (
        <UserDataContext.Provider value={contextValue}>
            {children}
        </UserDataContext.Provider>
    );
}
