import { ClientService } from './../../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../../../services/animations';
import { AlertService, DialogType, MessageSeverity } from '../../../../services/alert.service';
import { Client } from '../../../../models/client';
import { Router } from '@angular/router';

@Component({
    selector: 'clients-layout',
    templateUrl: './clients-layout.component.html',
    styleUrls: ['./clients-layout.component.css'],
    animations: [fadeInOut]
})
export class ClientsLayoutComponent implements OnInit {

    public clients: Client[] = [];
    public columnsForsearch: any[];

    constructor(private alertService: AlertService,
                private router: Router,
                private clientService: ClientService) { }

    ngOnInit(): void {
        this.columnsForsearch = [
            { field: 'company', header: 'company' },
            { field: 'fullName', header: 'fullName' },
            { field: 'phone', header: 'phone' },
            { field: 'email', header: 'email' }
        ];
        this.clientService.getClientsList()
            .subscribe( data => { this.clients = data; } );
    }

    edit(id: number): void {
        this.router.navigate(['/client-edit/', id]);
    }

    delete(id: number): void {
        this.alertService.showDialog('Are you sure?', DialogType.confirm,
            () => this.clientService.deleteClient(id)
                .subscribe(
                data => data,
                error => {
                    console.log(error);
                    this.alertService.showMessage('An error has occurred!', error, MessageSeverity.error);
                },
                () => { this.clients = this.clients.filter(x => x.id !== id); }),
        () => this.alertService.showMessage('Operation DELETE cancelled!', '', MessageSeverity.default));
    }

}
