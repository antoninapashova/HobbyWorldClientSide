import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../core/about/about.component';
import { AuthActivate } from '../core/guard/auth.activate';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserpostsComponent } from './userposts/userposts.component';

const routes: Routes = [
    {
     path: 'login',
       component: LoginComponent,
       canActivate: [AuthActivate],
       data: {
           authenticationRequired: false,
           authenticationFailureRedirectUrl: '/login'
       }
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthActivate],
        data: {
            authenticationRequired: false,
            authenticationFailureRedirectUrl: '/register'
        }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthActivate],
        data: {
            authenticationRequired: true,
            authenticationFailureRedirectUrl: '/login'
        }
    },
    {
        path: 'user-posts',
        component: UserpostsComponent,
        data: {
            authenticationRequired: true,
            authenticationFailureRedirectUrl: '/login'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            authenticationRequired: false
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }