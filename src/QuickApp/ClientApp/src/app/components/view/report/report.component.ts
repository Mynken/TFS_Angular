import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SelectItem } from 'primeng/primeng';

import { AlertService, MessageSeverity } from '../../../services/alert.service';
import { fadeInOut } from '../../../services/animations';
import { IReport, Report } from '../../../models/report';
import { ReportService } from '../../../services/custom/report.service';
import { BugStatus } from '../../../models/enums';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  animations: [fadeInOut]
})

export class ReportComponent implements OnInit {

  @ViewChild('reportForm')
  public reportForm: NgForm;
  public report: IReport = new Report();
  public priorities: SelectItem[];
  private userId: string;

  constructor(private alertService: AlertService,
      private router: Router,
      private _location: Location,
      private spinner: NgxSpinnerService,
      private reportService: ReportService,
      private authService: AuthService,
      private fb: FormBuilder) { }

  ngOnInit(): void {
      this.createForm();
      this.priorities = [ {label: 'Critical', value: 1},
                          {label: 'High', value: 2},
                          {label: 'Medium', value: 3},
                          {label: 'Low', value: 4}];
        this.userId = this.authService.currentUser.id;
  }

  back(): void {
      this._location.back();
  }

  onSubmit(): void {
    if (this.reportForm.valid) {
        this.spinner.show();
        this.report.status = BugStatus.New;
        this.report.clientId = this.userId;
        this.reportService.createReport(this.report).subscribe(() => {
            this.alertService.showMessage('Success!', `Your bug has been successfully submitted `, MessageSeverity.success);
            setTimeout(() => {
                this.spinner.hide();
            }, 2000);
            this.router.navigateByUrl('/home');
        },
        error => {
            this.alertService.showMessage('An error has occurred!',
            'Error Identifier:<br>' + error.error + '<br>' + 'Please contact our administrator', MessageSeverity.error);
            console.log(error);
        });
    } else {
        this.alertService.showMessage('Warning!', `Please fill in all fields`, MessageSeverity.warn);
    }
  }

  private createForm(): any {
      this.reportForm.form = this.fb.group({
          shortDescription: ['', Validators.required],
          priority: ['', Validators.required],
          fullDescription: ['', Validators.required]
      });
  }
}
