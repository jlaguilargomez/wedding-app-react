export interface IRaffle {
    isInvolved: boolean;
    luckyNumber?: number;
    raffleType?: string;
}

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
    raffle: IRaffle;
    isAdmin?: boolean;
    relatives: Array<IRelative>;
    aditionalInfo: string;
}
