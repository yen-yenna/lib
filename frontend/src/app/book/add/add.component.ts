import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {BookService} from '../book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private dialogRef: MatDialogRef<AddComponent>) {


    this.form = fb.group({
      title: new FormControl(),
      publisher: new FormControl(),
      status: new FormControl('AVAIBLE', [Validators.required]),
      yearOfPublishing: new FormControl()
    });

  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
