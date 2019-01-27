import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../../model';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  constructor(private http: HttpClient) {
  }

  save(book: Book) {
    console.log(book);
    return this.http.post<Book>('http://localhost:8080/proposal/save', book);
  }

  getAll() {
    return this.http.get('http://localhost:8080/proposal/all');
  }
}
