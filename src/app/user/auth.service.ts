import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable()
export class AuthService {

  isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
      const data = { username: username,password: password};
      let headers = new HttpHeaders();
      headers.set('Contact-Type', 'application/json'); 
      headers.set('Access-Control-Allow-Origin', 'http://localhost:8080/user/login');

      const url = `http://localhost:8080/user/login`;
      return this.httpClient.post<any>(url, data, { headers: headers })
          .pipe(
              map(response => {
                  localStorage.setItem('token', response.token);
                  this.isAuthenticatedSubject.next(true);
                  return response;
              })
          );
      // { token: "vrijednost-tokena" }
  }
  logout() {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(true);
}
}
