import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService, MessageSeverity, DialogType } from '../../../../services/alert.service';
import { fadeInOut } from '../../../../services/animations';
import { Client, IClient } from '../../../../models/client';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClientService } from '../../../../services/client.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { inputRangeValidator, emailValidator } from '../../../../directives/validation/validators';

@Component({
  selector: 'client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
  animations: [fadeInOut]
})
export class ClientCreateComponent implements OnInit {

    public clientForm: FormGroup;
    public client: IClient = new Client();

    constructor(private alertService: AlertService,
                private router: Router,
                private clientService: ClientService,
                private _location: Location,
                private spinner: NgxSpinnerService,
                private fb: FormBuilder) {}

    ngOnInit(): void {

        this.createForm();
    }

    back(): void {
        this._location.back();
    }

    onSubmit(): void {
        if (this.clientForm.valid) {
            this.spinner.show();
            this.client.startCooperationDate = new Date();
            this.clientService.createClient(this.client).subscribe(() => {
                this.alertService.showMessage('Success!', `Client has been successfully created`, MessageSeverity.success);
                setTimeout(() => {
                    this.spinner.hide();
                }, 2000);
                this.router.navigateByUrl('/clients');
            },
                error => {
                    console.log(error);
                    this.alertService.showMessage('An error has occurred!', error, MessageSeverity.error);
                });
        } else {
            this.alertService.showMessage('Warning!', `Please fill in all fields`, MessageSeverity.warn);
        }
    }

    private createForm(): any {
        this.clientForm = this.fb.group({
            fullName: new FormControl ('', [Validators.required]),
            company: new FormControl ('', [Validators.required, inputRangeValidator()]),
            email: new FormControl ('', [Validators.required, emailValidator()]),
            phone: new FormControl ('', [Validators.required])
        });
    }
}
