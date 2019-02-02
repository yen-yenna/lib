import { Component, OnInit } from '@angular/core';
import {Book} from '../model';
import {MatDialog} from '@angular/material';
import {Observable, of, Subject} from 'rxjs';
import {SearchService} from './search-service';
import {catchError, debounceTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['title', 'publisher', 'yearOfPublishing', 'status', 'reservation'];
  dataSource: Observable<Book[]>;
  private searchTerms = new Subject<string>();
  selectedBook: Book;

  constructor(private searchService: SearchService, private dialog: MatDialog) {
  }
  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.dataSource = this.searchTerms.pipe(
      debounceTime(300),
      switchMap(
        term =>
          term
        ?
            this.searchService.search(term)
            :
            of<Book[]>([])
      ),
      catchError(error => {
        console.log(`Error in component ... ${error}`);
        return of<Book[]>([]);
      })
    )
    ;
  }
  onSearch(book: Book): void {
    this.selectedBook = book;

  }
}
