import { SelectItem } from '../../../../node_modules/primeng/primeng';

export interface IProject {
    id: number;
    name: string;
    description: string;
    serverInfo: string;
    clientId: SelectItem;
    status: SelectItem;
}

export class Project implements IProject {
    id: number;
    name: string;
    description: string;
    serverInfo: string;
    clientId: SelectItem;
    status: SelectItem;
}
