import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService, MessageSeverity, DialogType } from '../../../../services/alert.service';
import { fadeInOut } from '../../../../services/animations';
import { Client, IClient } from '../../../../models/client';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClientService } from '../../../../services/client.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { inputRangeValidator, emailValidator } from '../../../../directives/validation/validators';

@Component({
  selector: 'client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
  animations: [fadeInOut]
})
export class ClientEditComponent implements OnInit {

    public clientId: number;
    public clientForm: FormGroup;
    public client: IClient = new Client();

    constructor(private alertService: AlertService,
                private router: Router,
                private route: ActivatedRoute,
                private clientService: ClientService,
                private _location: Location,
                private spinner: NgxSpinnerService,
                private fb: FormBuilder) {}

    ngOnInit(): void {
        this.createForm();
        this.route.params.subscribe(params => {
            this.clientId = + params['id'];
         });
         this.clientService.getClientById(this.clientId).subscribe(
             data => { this.client = data; });
    }

    back(): void {
        this._location.back();
    }

    onSubmit(): void {
        if (this.clientForm.valid) {
            this.spinner.show();
            this.clientService.updateClient(this.client).subscribe(() => {
                this.alertService.showMessage('Success!', `Client has been successfully updated`, MessageSeverity.success);
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
