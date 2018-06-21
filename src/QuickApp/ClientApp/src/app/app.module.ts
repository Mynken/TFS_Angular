import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppErrorHandler } from './app-error.handler';
import { AppTitleService } from './services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from './services/app-translation.service';
import { ConfigurationService } from './services/configuration.service';
import { AlertService } from './services/alert.service';
import { LocalStoreManager } from './services/local-store-manager.service';
import { EndpointFactory } from './services/endpoint-factory.service';
import { AccountService } from './services/account.service';
import { AccountEndpoint } from './services/account-endpoint.service';

import { EqualValidator } from './directives/equal-validator.directive';
import { LastElementDirective } from './directives/last-element.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { BootstrapTabDirective } from './directives/bootstrap-tab.directive';
import { BootstrapToggleDirective } from './directives/bootstrap-toggle.directive';
import { BootstrapSelectDirective } from './directives/bootstrap-select.directive';
import { BootstrapDatepickerDirective } from './directives/bootstrap-datepicker.directive';
import { GroupByPipe } from './pipes/group-by.pipe';

import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { UserInfoComponent } from './components/controls/managment/user-info/user-info.component';
import { UserPreferencesComponent } from './components/controls/managment/user-preferences/user-preferences.component';
import { UsersManagementComponent } from './components/controls/managment/users-management/users-management.component';
import { RolesManagementComponent } from './components/controls/managment/roles-management/roles-management.component';
import { RoleEditorComponent } from './components/controls/managment/role-editor/role-editor.component';
import { AppPrimeNgComponentsModule } from './components/app-primeng-components-module';
import { FswButtonComponent } from './components/controls/fsw-controls/fsw-button/fsw-button.component';
import { FswInputTextComponent } from './components/controls/fsw-controls/fsw-input-text/fsw-input-text.component';
import { FswAutocompleteComponent } from './components/controls/fsw-controls/fsw-autocomplete/fsw-autocomplete.component';
import { FswRadioButtonComponent } from './components/controls/fsw-controls/fsw-radio-button/fsw-radio-button.component';
import { ClientsLayoutComponent } from './components/view/clients/clients-layout/clients-layout.component';
import { ClientCreateComponent } from './components/view/clients/client-create/client-create.component';
import { ClientEditComponent } from './components/view/clients/client-edit/client-edit.component';
import { ClientService } from './services/client.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './components/controls/fsw-controls/custom-input/custom-input.component';
import { InputRefDirective } from './directives/validation/input-ref.directive';

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
        FswButtonComponent,
        FswInputTextComponent,
        FswAutocompleteComponent,
        FswRadioButtonComponent,
        ClientsLayoutComponent,
        ClientCreateComponent,
        ClientEditComponent,
        CustomInputComponent,
        InputRefDirective
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
        EndpointFactory
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
