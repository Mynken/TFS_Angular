import { SelectItem } from '../../../../node_modules/primeng/primeng';

export interface IReport {
    id: number;
    shortDescription: string;
    priority: SelectItem;
    fullDescription: Date;
    clientId: string;
    status: number;
}

export class Report implements IReport {
    id: number;
    shortDescription: string;
    priority: SelectItem;
    fullDescription: Date;
    clientId: string;
    status: number;
}
