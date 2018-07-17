import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Report } from '../../models/viewModels/reportVm';
import { ConfigurationService } from '../configuration.service';
import { EndpointFactory } from '../endpoint-factory.service';

@Injectable()
export class ReportService extends EndpointFactory {

  private readonly _ReportsGetUrl = '/api/Reports';
  private readonly _ReportCreateUpdateUrl = '/api/Reports';
  private readonly _ReportIdUrl = '/api/Reports/';

  constructor(protected http: HttpClient, protected configurations: ConfigurationService, injector: Injector) {
    super(http, configurations, injector);
  }

  getReportsList(): Observable<Report[]> {
    return this.http.get<Report[]>(this.configurations.baseUrl + this._ReportsGetUrl, this.getRequestHeaders());
  }

  getReportById(id: number): Observable<Report> {
    return this.http.get<Report>(this.configurations.baseUrl + this._ReportIdUrl + String(id), this.getRequestHeaders());
  }

  createReport(report: Report): Observable<any> {
    return this.http.post<Report>(this.configurations.baseUrl + this._ReportCreateUpdateUrl, report, this.getRequestHeaders());
  }

  updateReport(report: Report): Observable<any> {
    return this.http.put<Report>(this.configurations.baseUrl + this._ReportCreateUpdateUrl, report, this.getRequestHeaders());
  }

  deleteReport(id: number): Observable<any> {
    return this.http.delete(this.configurations.baseUrl + this._ReportIdUrl + String(id), this.getRequestHeaders());
  }
}
