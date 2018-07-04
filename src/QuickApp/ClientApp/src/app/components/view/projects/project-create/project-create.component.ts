import { Status } from './../../../../models/enums';

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { IProject, Project } from '../../../../models/project';
import { AlertService, MessageSeverity } from '../../../../services/alert.service';
import { fadeInOut } from '../../../../services/animations';
import { ProjectService } from './../../../../services/custom/project.service';
import { ClientService } from '../../../../services/custom/client.service';
import { Client } from '../../../../models/client';

@Component({
  selector: 'project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css'],
  animations: [fadeInOut]
})
export class ProjectCreateComponent implements OnInit {

    public projectForm: FormGroup;
    public project: IProject = new Project();
    public allclients: Client[] = [];
    public statuses: { name: string, value: number }[] = [];

    constructor(private alertService: AlertService,
        private router: Router,
        private projectService: ProjectService,
        private _location: Location,
        private spinner: NgxSpinnerService,
        private fb: FormBuilder,
        private clientService: ClientService) { }

    ngOnInit(): void {
        this.createForm();
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
        this.projectForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            clientId: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            serverInfo: new FormControl('', [Validators.required]),
            status: new FormControl('', [Validators.required])
        });
    }

    test(event: any) {
        console.log(event)
        if (event.itemValue) {
            this.project.clientId = event.itemValue;
        }

    }
}
