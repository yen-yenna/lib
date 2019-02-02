import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs';
import {Book} from '../model';
import {catchError} from 'rxjs/operators';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<Book[]> {
    return this.http
      .get<Book[]>(`/search?title=${term}`)
      .pipe();
  }
}
