import { Status } from './../../../../models/enums';

import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { IProject, Project } from '../../../../models/project';
import { AlertService, MessageSeverity } from '../../../../services/alert.service';
import { fadeInOut } from '../../../../services/animations';
import { ProjectService } from './../../../../services/custom/project.service';
import { ClientService } from '../../../../services/custom/client.service';
import { Client } from '../../../../models/client';
import { SelectItem } from 'primeng/primeng';

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
    public allclients: Client[] = [];
    public statuses: { name: string, value: number }[] = [];
    cars: SelectItem[];

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

                            this.cars = [
                                {label: 'Audi', value: 1},
                                {label: 'BMW', value: 2},
                                {label: 'Fiat', value: 3},
                                {label: 'Ford', value: 4},
                                {label: 'Honda', value: 5},
                                {label: 'Jaguar', value: 6},
                                {label: 'Mercedes', value: 7},
                                {label: 'Renault', value: 8},
                                {label: 'VW', value: 9},
                                {label: 'Volvo', value: 10}
                            ];
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
    }
}
