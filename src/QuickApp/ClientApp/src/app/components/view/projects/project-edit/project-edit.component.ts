import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { Client } from '../../../../models/client';
import { Status } from '../../../../models/enums';
import { IProject, Project } from '../../../../models/project';
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

    public projectId: number;
    public projectForm: FormGroup;
    public project: IProject = new Project();
    public allclients: Client[] = [];
    public statuses: { name: string, value: number }[] = [];

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
         this.projectService.getProjectById(this.projectId).subscribe(
             data => { this.project = data; });
        this.clientService.getClientsList()
             .subscribe( data => { this.allclients = data; } );
        this.statuses.push( {name: 'New', value: Status.New},
                             {name: 'InWork', value: Status.InWork},
                             {name: 'Finished', value: Status.Finished});
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
        this.projectForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            clientId: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            serverInfo: new FormControl('', [Validators.required]),
            status: new FormControl('', [Validators.required])
        });
    }
}