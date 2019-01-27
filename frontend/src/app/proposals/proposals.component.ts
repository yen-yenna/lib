import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book/book.service';
import {Book} from '../model';
import {ProposalService} from './service/proposal.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {

  bookForm: FormGroup;
  displayedColumns: string[] = ['title', 'publisher', 'yearOfPublishing'];
  dataSource: Book[];


  constructor(private proposalService: ProposalService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.bookForm = this.createFormGroup();
    this.refreshList();
  }

  onSubmit(formValues) {

    const newBOok = new Book(formValues.title, formValues.publisher, formValues.yearOfPublishing, null);
    this.proposalService.save(newBOok).subscribe(response => {
      this.refreshList();
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
  refreshList(){
    this.proposalService.getAll().subscribe((data: Book[]) => {
      this.dataSource = data;
    });
  }
}
