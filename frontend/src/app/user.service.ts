import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get('http://localhost:8080/user/info/' + username);
  }
  getUserReservations(username: string){
    return this.http.get('http://localhost:8080/reservation/' + username);
  }
  getUserRents(username: string){
    return this.http.get('http://localhost:8080/reservation/' + username);
  }
}
