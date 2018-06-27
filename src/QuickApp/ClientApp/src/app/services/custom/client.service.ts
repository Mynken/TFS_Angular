import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../models/client';
import { Observable } from 'rxjs/Observable';
import { ConfigurationService } from '../configuration.service';
import { EndpointFactory } from '../endpoint-factory.service';

@Injectable()
export class ClientService extends EndpointFactory {

    private readonly _ClientsGetUrl = '/api/Clients';
    private readonly _ClientCreateUpdateUrl = '/api/Clients';
    private readonly _ClientIdUrl = '/api/Clients/';

    constructor(protected http: HttpClient, protected configurations: ConfigurationService, injector: Injector) {
        super(http, configurations, injector);
    }

    getClientsList(): Observable<Client[]> {
        return this.http.get<Client[]>(this.configurations.baseUrl + this._ClientsGetUrl, this.getRequestHeaders());
    }

    getClientById(id: number): Observable<Client> {
        return this.http.get<Client>(this.configurations.baseUrl + this._ClientIdUrl + String(id), this.getRequestHeaders());
    }

    createClient(client: Client): Observable<any> {
        return this.http.post<Client>(this.configurations.baseUrl + this._ClientCreateUpdateUrl, client, this.getRequestHeaders());
    }

    updateClient(client: Client): Observable<any> {
        return this.http.put<Client>(this.configurations.baseUrl + this._ClientCreateUpdateUrl, client, this.getRequestHeaders());
    }

    deleteClient(id: number): Observable<any> {
        return this.http.delete(this.configurations.baseUrl + this._ClientIdUrl + String(id), this.getRequestHeaders());
    }
}
