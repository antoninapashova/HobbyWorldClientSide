import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IUser } from '../shared/interfaces/user';

@Injectable()
export class UserService {

  user!: IUser;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient
  ) { }

   login(data: { username: string; password: string }){
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type':'application/json',
      'withCrdentials': 'true',
      
    });
    
    let options = { headers: headers };
    return this.http.post<IUser>('http://localhost:8080/user/login', {data, options, responseType: 'json'}).pipe(
      tap((user) => this.user = user)
    );

  }

  register(data: { username: string, firstName: string, lastName: string, email: string, password: string, confirmPassword: string }) {
    let headers = new HttpHeaders({

      'Access-Control-Allow-Origin': '*',
      'withCrdentials': 'true'
    });
    let options = { headers: headers };
    return this.http.post<IUser>(`http://localhost:8080/user/register`, data, options).pipe(
      tap((user) => this.user == user)
    );
  }

  getProfileInfo() {
    return this.http.get<IUser>(`http://localhost:8080/user/profile`, { withCredentials: true })
      .pipe(tap((user) => this.user = user))
  }

  logout() {
    return this.http.post<IUser>(`http://localhost:8080/user/logout`, {}, { withCredentials: true }).pipe(
      tap(() => this.user == null)
    );
  }

  updateProfile(data: { username: string; email: string; tel: string; }) {
    return this.http.put<IUser>(`http://localhost:8080/user/profile`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }


}
