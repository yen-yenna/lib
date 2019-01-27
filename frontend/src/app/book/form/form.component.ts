import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Book} from '../../model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  bookForm: FormGroup;


  constructor(private bookService: BookService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.bookForm = this.createFormGroup();
  }
  onSubmit(formValues) {

    const newBOok = new Book(formValues.title, formValues.publisher, formValues.yearOfPublishing, null);
    this.bookService.save(newBOok).subscribe(response => {
      }
    );
  }
  createFormGroup() {
    return this.formBuilder.group({
      title: new FormControl(),
      publisher: new FormControl(),
      yearOfPublishing: new FormControl()
    });
  }
}
