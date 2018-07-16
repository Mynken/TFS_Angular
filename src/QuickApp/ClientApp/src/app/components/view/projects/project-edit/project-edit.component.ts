import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SelectItem } from 'primeng/primeng';

import { Status } from '../../../../models/enums';
import { IProject, Project } from '../../../../models/viewModels/projectVm';
import { AlertService, MessageSeverity } from '../../../../services/alert.service';
import { fadeInOut } from '../../../../services/animations';
import { ClientService } from '../../../../services/custom/client.service';
import { ProjectService } from './../../../../services/custom/project.service';

@Component({
  selector: 'project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],
  animations: [fadeInOut]
})
export class ProjectEditComponent implements OnInit {


    @ViewChild('projectForm')
    public projectForm: NgForm;
    public projectId: number;
    public project: IProject = new Project();
    public statuses: SelectItem[] = [];
    public clients: SelectItem[];

    constructor(private alertService: AlertService,
        private router: Router,
        private route: ActivatedRoute,
        private projectService: ProjectService,
        private _location: Location,
        private spinner: NgxSpinnerService,
        private clientService: ClientService,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.createForm();
        this.route.params.subscribe(params => {
            this.projectId = + params['id'];
         });
         this.statuses.push( {label: 'New', value: Status.New},
                            {label: 'InWork', value: Status.InWork},
                            {label: 'Finished', value: Status.Finished});
        this.clientService.getClientsList()
            .subscribe( data => {
                data.forEach(el => {
                    this.clients.push({label: el.company, value: el.id});
                });
            }
        );
    }

    back(): void {
        this._location.back();
    }

    onSubmit(): void {
        if (this.projectForm.valid) {
            this.spinner.show();
            this.projectService.updateProject(this.project).subscribe(() => {
                this.alertService.showMessage('Success!', `Client has been successfully updated`, MessageSeverity.success);
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
    }
}
