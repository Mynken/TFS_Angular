import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../../services/custom/report.service';
import { Report } from '../../../../models/viewModels/reportVm';
import { fadeInOut } from '../../../../services/animations';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [fadeInOut]
})
export class UserComponent implements OnInit {

  public reports: Report[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.getReportsList()
    .subscribe( data => { this.reports = data; console.log(data); } );
  }

}
