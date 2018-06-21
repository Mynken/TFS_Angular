export interface IClient {
    id: number;
    fullName: string;
    company: string;
    startCooperationDate: Date;
    phone: string;
    email: string;
}

export class Client implements IClient {
    id: number;
    fullName: string;
    company: string;
    startCooperationDate: Date;
    phone: string;
    email: string;
}
