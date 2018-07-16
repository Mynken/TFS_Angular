import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router, Data } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SelectItem } from 'primeng/primeng';

import { IProject, Project } from '../../../../models/viewModels/projectVm';
import { AlertService, MessageSeverity } from '../../../../services/alert.service';
import { fadeInOut } from '../../../../services/animations';
import { ClientService } from '../../../../services/custom/client.service';
import { Status } from './../../../../models/enums';
import { ProjectService } from './../../../../services/custom/project.service';
import { Client } from '../../../../models/client';

@Component({
  selector: 'project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css'],
  animations: [fadeInOut]
})
export class ProjectCreateComponent implements OnInit {

    @ViewChild('projectForm')
    public projectForm: NgForm;
    public project: IProject = new Project();
    public statuses: SelectItem[] = [];
    public clients: SelectItem[] = [];
    public allclients: Client[] = [];

    constructor(private alertService: AlertService,
        private router: Router,
        private projectService: ProjectService,
        private _location: Location,
        private spinner: NgxSpinnerService,
        private fb: FormBuilder,
        private clientService: ClientService) { }

    ngOnInit(): void {
        this.createForm();
        this.statuses.push( {label: 'New', value: Status.New},
                            {label: 'InWork', value: Status.InWork},
                            {label: 'Finished', value: Status.Finished});
    }

    back(): void {
        this._location.back();
    }

    onSubmit(): void {
        if (this.projectForm.valid) {
            this.spinner.show();
            this.projectService.createProject(this.project).subscribe(() => {
                this.alertService.showMessage('Success!', `Client has been successfully created`, MessageSeverity.success);
                setTimeout(() => {
                    this.spinner.hide();
                }, 2000);
                this.router.navigateByUrl('/projects');
            },
                error => {
                    this.alertService.showMessage('An error has occurred!',
                    'Error Identifier:<br>' + error.error + '<br>' + 'Please contact your administrator', MessageSeverity.error);
                    console.log(error);
                });
        } else {
            this.alertService.showMessage('Warning!', `Please fill in all fields`, MessageSeverity.warn);
        }
    }

    private createForm(): any {
        this.projectForm.form = this.fb.group({
            name: ['', Validators.required],
            clientId: ['', Validators.required],
            description: ['', Validators.required],
            serverInfo: ['', Validators.required],
            status: ['', Validators.required]
        });

        this.clientService.getClientsList()
            .subscribe(data => {
            this.allclients = data;
                this.allclients.forEach(element => { console.log(this.allclients);
                    this.clients.push({ label: element.company, value: element.id });
                });
            }
            );
    }
}
