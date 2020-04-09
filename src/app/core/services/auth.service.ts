import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:8080/api/auth/login/';
  employeesUrl = 'http://localhost:8080/api/employees/';
  confirmEmailUrl = 'test.com';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if(user.result.succeeded) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  register(model: any) {
    let httpHeaders = new HttpHeaders({
      'confirmEmailUrl': this.confirmEmailUrl
    });
    let arithmetic = 1 - new Date().now();
    let options = {headers: httpHeaders};
    return this.http.post(this.employeesUrsl + 'create', model, options );
  }
}
