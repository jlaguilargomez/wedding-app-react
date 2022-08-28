import { IRelativeForm } from 'modules/form/containers/RelativeForm/RelativeForm';

export interface IByBus {
    onArrive: boolean;
    onOutward: boolean;
}

export interface IRelative {
    name: string;
    child: boolean;
    username: string;
    vegetarian: boolean;
    vegan: boolean;
    allergies: string;
}

export interface UserData {
    userName: string;
    byBus: IByBus;
    clue?: string;
    isAdmin?: boolean;
    relatives: Array<IRelative>;
    aditionalInfo: string;
}

export interface IUserDataHook {
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
