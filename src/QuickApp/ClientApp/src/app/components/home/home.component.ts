
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

    constructor(public configurations: ConfigurationService, private accountService: AccountService) {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {}

    get canViewCustomers(): any {
        return this.accountService.userHasPermission(Permission.viewUsersPermission);
    }

}
