import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(
    private userService: UserService,
   private router: Router,
   private activateRoute: ActivatedRoute) { }

   login(form: NgForm):void {
    if (form.invalid) { return; }
    const { username, password } = form.value;
    this.userService.login({ username, password }).subscribe({
      next: () => {
        const redirectUrl = this.activateRoute.snapshot.queryParams['redirectUrl'] || '/';
        this.router.navigate([redirectUrl]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
