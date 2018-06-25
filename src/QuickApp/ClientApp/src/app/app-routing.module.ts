import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { ClientsLayoutComponent } from './components/view/clients/clients-layout/clients-layout.component';
import { ClientCreateComponent } from './components/view/clients/client-create/client-create.component';
import { ClientEditComponent } from './components/view/clients/client-edit/client-edit.component';

 @NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { title: 'Home' } },
            { path: 'login', component: LoginComponent, data: { title: 'Login' } },
            { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard], data: { title: 'Settings' } },
            { path: 'clients', component: ClientsLayoutComponent, canActivate: [AuthGuard], data: { title: 'Clients'} },
            { path: 'client-create', component: ClientCreateComponent, canActivate: [AuthGuard], data: { title: 'Clients create'}  },
            { path: 'client-edit/:id', component: ClientEditComponent, canActivate: [AuthGuard], data: { title: 'Clients create'}  },
            // { path: 'car-edit/:id', component: CarEditComponent, canActivate: [AuthGuard], data: { title: 'EditCar' } },
            { path: 'home', redirectTo: '/', pathMatch: 'full' },
            { path: '**', component: NotFoundComponent, data: { title: 'Page Not Found' } },
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthService, AuthGuard
    ]
})
export class AppRoutingModule { }
