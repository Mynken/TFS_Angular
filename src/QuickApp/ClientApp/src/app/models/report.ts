export interface IReport {
    id: number;
    shortDescription: string;
    priority: number;
    fullDescription: Date;
    clientId: string;
    status: number;
}

export class Report implements IReport {
    id: number;
    shortDescription: string;
    priority: number;
    fullDescription: Date;
    clientId: string;
    status: number;
}
