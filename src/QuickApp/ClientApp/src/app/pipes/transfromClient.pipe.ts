import { Pipe, PipeTransform } from '@angular/core';
import { ClientService } from '../services/custom/client.service';
import { Client } from '../models/client';

@Pipe({
    name: 'transformClient'
})
export class TransformClient implements PipeTransform {

    public clients: Client[] = [];
    constructor(private clientService: ClientService) {
        this.clientService.getClientsList()
        .subscribe(data => { this.clients = data; });
    }

    transform(value: number): string {
        if (this.clients.length > 0) {
            return this.clients.find(x => x.id === value).fullName;
        } else {
            return 'abc123';
        }
    }
}
