import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ContextProviderProps {
    children: ReactNode;
}

export interface ProviderValueState<T> {
    state: T;
    setState: Dispatch<SetStateAction<T>>;
}
