import { Component } from '@angular/core';
import { UserService } from './user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService){}

  get isLogged(): boolean{
    return this.userService.isLogged;
  }
}

