interface IRaffle {
    isInvolved: boolean;
    luckyNumber: number;
}

interface IRelative {
    name: string;
    child: boolean;
    username: string;
    vegetarian: boolean;
    allergies: Array<string>;
}

export interface UserData {
    byBus: boolean;
    raffle: IRaffle;
    relatives: { [key: string]: IRelative };
}
