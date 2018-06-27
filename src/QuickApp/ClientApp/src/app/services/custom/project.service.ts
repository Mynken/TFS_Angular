import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../models/project';
import { Observable } from 'rxjs/Observable';
import { ConfigurationService } from '../configuration.service';
import { EndpointFactory } from '../endpoint-factory.service';

@Injectable()
export class ProjectService extends EndpointFactory {

    private readonly _ProjectsGetUrl = '/api/Projects';
    private readonly _ProjectCreateUpdateUrl = '/api/Projects';
    private readonly _ProjectIdUrl = '/api/Projects/';

    constructor(protected http: HttpClient, protected configurations: ConfigurationService, injector: Injector) {
        super(http, configurations, injector);
    }

    getProjectsList(): Observable<Project[]> {
        return this.http.get<Project[]>(this.configurations.baseUrl + this._ProjectsGetUrl, this.getRequestHeaders());
    }

    getProjectById(id: number): Observable<Project> {
        return this.http.get<Project>(this.configurations.baseUrl + this._ProjectIdUrl + String(id), this.getRequestHeaders());
    }

    createProject(project: Project): Observable<any> {
        return this.http.post<Project>(this.configurations.baseUrl + this._ProjectCreateUpdateUrl, project, this.getRequestHeaders());
    }

    updateProject(project: Project): Observable<any> {
        return this.http.put<Project>(this.configurations.baseUrl + this._ProjectCreateUpdateUrl, project, this.getRequestHeaders());
    }

    deleteProject(id: number): Observable<any> {
        return this.http.delete(this.configurations.baseUrl + this._ProjectIdUrl + String(id), this.getRequestHeaders());
    }
}
