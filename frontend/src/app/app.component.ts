import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../language-service';
import {TranslateService} from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {

  }
  username;
  role;

  ngOnInit( ) {
      this.username = sessionStorage.getItem('username');
      this.role = sessionStorage.getItem('role');
      console.log(this.username);
      console.log(this.role);

  }

  setLang(lang: string) {
    this.translate.use(lang);
  }
  logout() {
    this.username = null;
    this.role = null;
    sessionStorage.clear();
    window.location.reload();
  }

}
