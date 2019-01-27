export class Book {
  title: any;
  publisher: any;
  yearOfPublishing: number;
  status: string;


  constructor(title: any, publisher: any, yearOfPublishing: number, status:string) {
    this.title = title;
    this.status = status;
    this.publisher = publisher;
    this.yearOfPublishing = yearOfPublishing;
  }
}

export class ReservationRequest{
  username:any;
  book_id:any;
  reservedTo:any;


  constructor(userID: any, bookId: any, ReservedTo: any) {
    this.username = userID;
    this.book_id = bookId;
    this.reservedTo = ReservedTo;
  }
}

export class User{
  username:string;
  name:string;
  surname:string;
  password:string;
  email: string;
  pesel:string;
  role: string;


  constructor(username: string, name: string, surname: string, password: string, pesel: string, email: string, role:string) {
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.pesel = pesel;
    this.email = email;
    this.role = role;
  }
}

export class Login {
  username: string;
  password: string;


  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class UserReservations {
  id;
  reservationDate;
  reservedTo;
  status;
  bookTitle;
  bookPublisher;
  bookYearOfPublishing;


  constructor(id, reservationDate, reservedTo, status, bookTitle, bookPublisher, bookYearOfPublishing) {
    this.id = id;
    this.reservationDate = reservationDate;
    this.reservedTo = reservedTo;
    this.status = status;
    this.bookTitle = bookTitle;
    this.bookPublisher = bookPublisher;
    this.bookYearOfPublishing = bookYearOfPublishing;
  }
}
