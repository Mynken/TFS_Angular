
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { ConfigurationService } from '../../services/configuration.service';
import { AccountService } from '../../services/account.service';
import { Permission } from '../../models/permission.model';
import {Message} from 'primeng/components/common/api';
import { NgForm, FormBuilder, Validators, FormControl } from '@angular/forms';
import { inputRangeValidator } from '../../directives/validation/validators';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    encapsulation: ViewEncapsulation.None,
    animations: [fadeInOut]
})
export class HomeComponent {

    @ViewChild('createFilmForm')
    createFilmForm: NgForm;

    public msgs: Message[] = [];
    public arr = ['google', 'microsoft', 'windows', 'bmw', 'audi', 'dfdsfsf', 'sdfsdf', 'dfdsfsf', 'sdfsdf', 'dfdsfsf', 'sdfsdf', ];
    public suggestedValues: string[];
    public model: string;
    public radioModel: string;
    cities: any;
    date3: any;
    test1: any;
    test2: any;

    options = {
        test1: 5,
        test2: 'а'
      };

    selectedCity: any;
    constructor(public configurations: ConfigurationService, private accountService: AccountService, private fb: FormBuilder) {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {
        this.createFilmForm.form.valueChanges.subscribe(x => {
          console.log(x);
        });

        this.createFilmForm.form = this.fb.group({
            test1: ['', Validators.required],
            test2: new FormControl ('', [Validators.required, inputRangeValidator()]),
          });
      }

    get canViewCustomers(): any {
        return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. Optional
      }

      changeValue(event: any): void {
          this.model = event;
      }

      showSuccess(): void {
        this.msgs = [];
        this.msgs.push({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
      }

      showInfo(): void {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
    }

    showWarn(): void {
        this.msgs = [];
        this.msgs.push({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    }

    showError(): void {
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    }

    onSubmit(): any {
        console.log( this.createFilmForm.form);
    }
}
