import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book, ReservationRequest} from '../model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  save(book: Book) {
    return this.http.post<Book>('http://localhost:8080/book/save', book);
  }

  getAll() {
    return this.http.get('http://localhost:8080/book/all');
  }

  reserve(reservation: ReservationRequest){
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post<ReservationRequest>('http://localhost:8080/reservation/add', reservation, {headers});
  }

  decline(bookId: number) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    console.log(bookId);
    return this.http.post<number>('http://localhost:8080/reservation/decline', bookId, {headers});

  }
return(bookId: number) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    console.log(bookId);
    return this.http.post<number>('http://localhost:8080/reservation/return', bookId, {headers});

  }

  borrow(bookId: number){
    const headers = new HttpHeaders();
    console.log(bookId);
    headers.set('Content-Type', 'application/json');
    return this.http.post<number>('http://localhost:8080/reservation/borrow', bookId, {headers});
  }
}
