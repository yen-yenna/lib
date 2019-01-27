import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {RegisterService} from '../register/service/register.service';
import {Login, User} from '../model';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {BoxComponent} from '../box/box.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;


  constructor(private router: Router, private registerService: RegisterService, private formBuilder: FormBuilder, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loginForm = this.createFormGroup();
  }


  onSubmit(formValues) {
    const loginRequest = new Login(
      formValues.username,
      formValues.password);

    this.registerService.login(loginRequest).subscribe(
      (response: User) => {
      sessionStorage.setItem('username', response.username);
      sessionStorage.setItem('role', response.role);
        this.router.navigateByUrl('/book-list');
        window.location.reload();
      },
      error => {
        this.openErrorBox('Niepoprawne dane logowania');
      }
    );
  }

  createFormGroup() {
    return this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl()
    });
  }
  openErrorBox(message: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = message;
    this.dialog.open(BoxComponent, dialogConfig);
  }
}
