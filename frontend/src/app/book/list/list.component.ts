import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book, ReservationRequest} from '../../model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddComponent} from '../add/add.component';
import {BoxComponent} from '../../box/box.component';
import {Router} from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'publisher', 'yearOfPublishing', 'status', 'reservation'];
  dataSource: Book[];
  role;
  username;
  adminLoggedIn;

  constructor(private bookService: BookService, private dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    this.username = sessionStorage.getItem('username');
    if (this.role === 'admin') {
      this.displayedColumns = ['title', 'publisher', 'yearOfPublishing', 'status', 'reservation', 'admin_actions'];
      this.adminLoggedIn = true;
    }
    this.bookService.getAll().subscribe((data: Book[]) => {
      this.dataSource = data;
    });
  }

  add() {

    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(AddComponent);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log(data);
        this.bookService.save(data).subscribe(data => {
          this.bookService.getAll().subscribe((data: Book[]) => {
            this.dataSource = data;
          });
        });

      }
    );
  }

  reserve(element: any) {

    if (this.role == null) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = 'Musisz byc zalogowany, by dokonac rezerwacji';
      this.dialog.open(BoxComponent, dialogConfig);
    } else {
      if (element.status === 'AVAIBLE') {
        const reservation = new ReservationRequest(this.username, element.id, '2018-01-01');
        this.bookService.reserve(reservation).subscribe(data => {
        });
        this.router.navigateByUrl('/book-list');
        window.location.reload();
      } else {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = 'Ksiazka jest juz zarezerwowana';
        this.dialog.open(BoxComponent, dialogConfig);
      }
    }

  }

  borrow(element) {
    console.log(element);
    this.bookService.borrow(element.id).subscribe(data => {
    });
    this.router.navigateByUrl('/book-list');
    window.location.reload();
  }

  decline(element) {
    console.log(element.id);
    this.bookService.decline(element.id).subscribe(data => {
    });
    this.router.navigateByUrl('/book-list');
    window.location.reload();
  }
  return(element) {
    console.log(element.id);
    this.bookService.return(element.id).subscribe(data => {
    });
    this.router.navigateByUrl('/book-list');
    window.location.reload();
  }
}

