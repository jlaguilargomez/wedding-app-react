interface IRaffle {
    isInvolved: boolean;
    luckyNumber: number;
    raffleType?: string;
}

interface IByBus {
    onArrive: boolean;
    onOutward: boolean;
}

interface IRelative {
    name: string;
    child: boolean;
    username: string;
    vegetarian: boolean;
    allergies: Array<string>;
}

export interface UserData {
    byBus: IByBus;
    raffle: IRaffle;
    relatives: { [key: string]: IRelative };
    aditionalInfo: string;
}
