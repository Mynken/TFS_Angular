export interface IReport {
    id: number;
    shortDescription: string;
    priority: number;
    fullDescription: Date;
}

export class Report implements IReport {
    id: number;
    shortDescription: string;
    priority: number;
    fullDescription: Date;
}
