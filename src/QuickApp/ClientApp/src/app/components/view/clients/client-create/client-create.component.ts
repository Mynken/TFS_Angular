import { Validation } from './../../../../models/enums';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService, MessageSeverity, DialogType } from '../../../../services/alert.service';
import { fadeInOut } from '../../../../services/animations';
import { Client, IClient } from '../../../../models/client';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClientService } from '../../../../services/client.service';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

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
                  private fb: FormBuilder) { }

    ngOnInit(): void {
        // this.validation();
        this.createForm();
    }

    back(): void {
        this._location.back();
    }

    onSubmit(): void {
        console.log('d');
        // for (let i = 0; i < this.viewService.length; i++) {
        //     if (this.viewService[i].valid === undefined || this.viewService[i].valid === false) {
        //         console.log(this.viewService);
        //         break;
        //     }
        // }

        // if (this.createKontrahentForm['status'] === 'VALID') {
            // this.spinner.show();
            // this.client.startCooperationDate = new Date();
            // this.clientService.createClient(this.client).subscribe((data) => {
            //     this.alertService.showMessage('Success!', `Client has been successfully created`, MessageSeverity.success);
            //     setTimeout(() => {
            //         this.spinner.hide();
            //     }, 2000);
            //     this.router.navigateByUrl('/clients');
            // },
            //     error => {
            //         console.log(error);
            //         this.alertService.showMessage('An error has occurred!', error, MessageSeverity.error);
            //     });
        // } else {
        //     this.validation();
        //     this.alertService.showMessage('Попередження!', `Будь-ласка, заповніть всі поля`, MessageSeverity.warn);
        // }

    }

    private createForm(): any {
        this.clientForm = this.fb.group({
            fullName: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
            company: new FormControl ('', [Validators.required, this.userNameValidator()]),
            email: new FormControl ('', [Validators.required, this.userNameValidator()]),
            phone: new FormControl ('', [Validators.required, this.userNameValidator()]),
        });
      }

    getNotification(event: any): void {
    }

    private userNameValidator(): ValidatorFn {
        const pattern: RegExp = /^[\w\.\$@\*\!]{5,30}$/;
        return (control: AbstractControl): { [key: string]: any } => {
            if (!(control.dirty || control.touched)) {
                return null;
            } else {
                return pattern.test(control.value) ? null : {custom: `error`};
            }
        };
    }
}
