export interface IProject {
    id: number;
    name: string;
    clientId: number;
    description: string;
    serverInfo: string;
    status: number;
}

export class Project implements IProject {
    id: number;
    name: string;
    clientId: number;
    description: string;
    serverInfo: string;
    status: number;
}
