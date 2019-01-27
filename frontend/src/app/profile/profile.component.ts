import {AfterViewInit, Component, OnInit} from '@angular/core';
import {User, UserReservations} from '../model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  user: User;
  userReservations: UserReservations[];
  displayedColumns: string[] = ['id',
  'reservationDate',
  'reservedTo',
  'status',
  'bookTitle',
  'bookPublisher',
  'bookYearOfPublishing'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(sessionStorage.getItem('username')).subscribe((user: User) => {
      this.user = user;
    });
  }

  ngAfterViewInit(): void {
    this.userService.getUserReservations(this.user.username).subscribe((data: UserReservations[])=>{
      this.userReservations=data;
      console.log(this.userReservations);
    })
  }

}
