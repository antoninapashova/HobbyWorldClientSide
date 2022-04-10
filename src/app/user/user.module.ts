import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserpostsComponent } from './userposts/userposts.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserpostsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class UserModule { }
