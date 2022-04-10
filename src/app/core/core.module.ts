import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import{HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { AuthActivate } from './guard/auth.activate';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    AboutComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  HttpClientModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    AsideComponent,
    IndexComponent
  ],
  providers: [
    {
      provide: InjectionToken,
      useValue: localStorage,
      
    },
   AuthActivate
  ]
})
export class CoreModule { }
