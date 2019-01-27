import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book/book.service';
import {Book, User} from '../model';
import {RegisterService} from './service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private registerService: RegisterService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.createFormGroup();
  }

  onSubmit(formValues) {
    const newUser = new User(
      formValues.username,
      formValues.name,
      formValues.surname,
      formValues.password,
      formValues.pesel,
      formValues.email,
      'user');
    this.registerService.register(newUser).subscribe(response => {
      console.log(response.username);
      }
    );
  }

  createFormGroup() {
    return this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
      surname: new FormControl(),
      pesel: new FormControl(),
      email: new FormControl()
    });
  }
}
