import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { Client } from '../../../../models/client';
import { Status } from '../../../../models/enums';
import { IProject, Project } from '../../../../models/project';
import { AlertService, MessageSeverity } from '../../../../services/alert.service';
import { fadeInOut } from '../../../../services/animations';
import { ClientService } from '../../../../services/custom/client.service';
import { ProjectService } from './../../../../services/custom/project.service';
import { SelectItem } from 'primeng/primeng';

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
    public allclients: Client[] = [];
    public statuses: { name: string, value: number }[] = [];
    cars: SelectItem[];

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
