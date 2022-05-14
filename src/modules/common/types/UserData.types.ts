export interface IRaffle {
    isInvolved: boolean;
    luckyNumber: number;
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
    allergies: string;
}

export interface UserData {
    byBus: IByBus;
    raffle: IRaffle;
    isAdmin: boolean;
    relatives: Array<IRelative>;
    aditionalInfo: string;
}
