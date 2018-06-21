
import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { ConfigurationService } from '../../services/configuration.service';
import { AccountService } from '../../services/account.service';
import { Permission } from '../../models/permission.model';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [fadeInOut]
})
export class HomeComponent {

    public msgs: Message[] = [];
    public arr = ['google', 'microsoft', 'windows', 'bmw', 'audi', 'dfdsfsf', 'sdfsdf', 'dfdsfsf', 'sdfsdf', 'dfdsfsf', 'sdfsdf', ];
    public suggestedValues: string[];
    public model: string;
    public radioModel: string;
    constructor(public configurations: ConfigurationService, private accountService: AccountService) {
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
}
