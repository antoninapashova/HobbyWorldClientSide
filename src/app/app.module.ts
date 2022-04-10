import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { HobbyService } from './hobby.service';
import { MainComponent } from './main/main.component';
import { HobbyModule } from './hobby/hobby.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent
   ],
  imports: [
    BrowserModule,
     UserModule,
    CoreModule,
    HobbyModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [HobbyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
