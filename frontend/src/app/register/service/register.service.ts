import { Injectable } from '@angular/core';
import {Book, Login, User} from '../../model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register(user: User) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    console.log(user);
    return this.http.post<User>('http://localhost:8080/user/register', user, {headers});
  }

  login(loginRequest: Login) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    console.log(loginRequest);
    return this.http.post<Login>('http://localhost:8080/user/login', loginRequest, {headers});
  }
}
