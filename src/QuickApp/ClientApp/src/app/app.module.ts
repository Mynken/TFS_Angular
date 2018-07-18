import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';
import { ToastyModule } from 'ng2-toasty';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppErrorHandler } from './app-error.handler';
import { AppRoutingModule } from './app-routing.module';
import { AppPrimeNgComponentsModule } from './components/app-primeng-components-module';
import { AppComponent } from './components/app.component';
import { FswAutocompleteComponent } from './components/controls/fsw-controls/fsw-autocomplete/fsw-autocomplete.component';
import { FswButtonComponent } from './components/controls/fsw-controls/fsw-button/fsw-button.component';
import { FSWCustomInputComponent } from './components/controls/fsw-controls/fsw-custom-input/fsw-custom-input.component';
import { FswDropdownComponent } from './components/controls/fsw-controls/fsw-dropdown/fsw-dropdown.component';
import { FswInputTextComponent } from './components/controls/fsw-controls/fsw-input-text/fsw-input-text.component';
import { FswRadioButtonComponent } from './components/controls/fsw-controls/fsw-radio-button/fsw-radio-button.component';
import { FswTextareaComponent } from './components/controls/fsw-controls/fsw-textarea/fsw-textarea.component';
import { RoleEditorComponent } from './components/controls/managment/role-editor/role-editor.component';
import { RolesManagementComponent } from './components/controls/managment/roles-management/roles-management.component';
import { UserInfoComponent } from './components/controls/managment/user-info/user-info.component';
import { UserPreferencesComponent } from './components/controls/managment/user-preferences/user-preferences.component';
import { UsersManagementComponent } from './components/controls/managment/users-management/users-management.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ClientCreateComponent } from './components/view/clients/client-create/client-create.component';
import { ClientEditComponent } from './components/view/clients/client-edit/client-edit.component';
import { ClientsLayoutComponent } from './components/view/clients/clients-layout/clients-layout.component';
import { ProjectCreateComponent } from './components/view/projects/project-create/project-create.component';
import { ProjectEditComponent } from './components/view/projects/project-edit/project-edit.component';
import { ProjectsLayoutComponent } from './components/view/projects/projects-layout/projects-layout.component';
import { ReportComponent } from './components/view/report/report.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { BootstrapDatepickerDirective } from './directives/bootstrap-datepicker.directive';
import { BootstrapSelectDirective } from './directives/bootstrap-select.directive';
import { BootstrapTabDirective } from './directives/bootstrap-tab.directive';
import { BootstrapToggleDirective } from './directives/bootstrap-toggle.directive';
import { EqualValidator } from './directives/equal-validator.directive';
import { LastElementDirective } from './directives/last-element.directive';
import { InputRefDirective } from './directives/validation/input-ref.directive';
import { GroupByPipe } from './pipes/group-by.pipe';
import { TransformStatus } from './pipes/transformStatus.pipe';
import { TransformClient } from './pipes/transfromClient.pipe';
import { AccountEndpoint } from './services/account-endpoint.service';
import { AccountService } from './services/account.service';
import { AlertService } from './services/alert.service';
import { AppTitleService } from './services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from './services/app-translation.service';
import { ConfigurationService } from './services/configuration.service';
import { ClientService } from './services/custom/client.service';
import { ProjectService } from './services/custom/project.service';
import { ReportService } from './services/custom/report.service';
import { EndpointFactory } from './services/endpoint-factory.service';
import { LocalStoreManager } from './services/local-store-manager.service';
import { UserComponent } from './components/view/home/user/user.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: TranslateLanguageLoader
            }
        }),
        NgxDatatableModule,
        ToastyModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        BsDropdownModule.forRoot(),
        CarouselModule.forRoot(),
        ModalModule.forRoot(),
        AppPrimeNgComponentsModule,
        NgxSpinnerModule,
        ChartsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        SettingsComponent,
        UsersManagementComponent, UserInfoComponent, UserPreferencesComponent,
        RolesManagementComponent, RoleEditorComponent,
        NotFoundComponent,
        EqualValidator,
        LastElementDirective,
        AutofocusDirective,
        BootstrapTabDirective,
        BootstrapToggleDirective,
        BootstrapSelectDirective,
        BootstrapDatepickerDirective,
        GroupByPipe,
        TransformClient,
        TransformStatus,
        FswButtonComponent,
        FswInputTextComponent,
        FswAutocompleteComponent,
        FswRadioButtonComponent,
        ClientsLayoutComponent,
        ClientCreateComponent,
        ClientEditComponent,
        FSWCustomInputComponent,
        InputRefDirective,
        ProjectsLayoutComponent,
        ProjectCreateComponent,
        ProjectEditComponent,
        FswTextareaComponent,
        FswDropdownComponent,
        ReportComponent,
        UserComponent
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
        { provide: ErrorHandler, useClass: AppErrorHandler },
        AlertService,
        ConfigurationService,
        AppTitleService,
        AppTranslationService,
        AccountService,
        AccountEndpoint,
        LocalStoreManager,
        ClientService,
        ProjectService,
        ReportService,
        EndpointFactory
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function getBaseUrl(): any {
    return document.getElementsByTagName('base')[0].href;
}
