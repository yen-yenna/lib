import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book, ReservationRequest} from '../../model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddComponent} from '../add/add.component';
import {BoxComponent} from '../../box/box.component';



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


  constructor(private bookService: BookService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    this.username = sessionStorage.getItem('username');
    if(this.role==='admin'){
      this.displayedColumns= ['title', 'publisher', 'yearOfPublishing', 'status', 'reservation', 'admin_actions'];
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
        this.bookService.save(data).subscribe(data=>{
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
      dialogConfig.data = "Musisz byc zalogowany, by dokonac rezerwacji";
      this.dialog.open(BoxComponent, dialogConfig);
    } else {

      let reservation = new ReservationRequest(this.username, element.id, '2018-01-01');
      console.log(reservation);
      this.bookService.reserve(reservation).subscribe(data => {
        console.log(reservation);
      });
    }

  }

  borrow(element) {
    this.bookService.borrow(element.id).subscribe(data=>{
    })
  }

  decline(element) {
    this.bookService.decline(element.id).subscribe(data=>{
    })
  }
}

