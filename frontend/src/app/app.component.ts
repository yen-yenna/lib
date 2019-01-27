import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../language-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private languageService: LanguageService) {

  }
  username;
  role;
  languagesShorts;
  messages;

  ngOnInit() {

    this.messages = this.languageService.getCurrentLanguage().messages;
    this.languagesShorts = this.languageService.getAllLanguagesShorts();
      this.username = sessionStorage.getItem('username');
      this.role = sessionStorage.getItem('role');
      console.log(this.username);
      console.log(this.role);

  }

  logout() {
    this.username = null;
    this.role = null;
    sessionStorage.clear();
    window.location.reload();
  }
  changeLanguage(languageShort) {
    this.languageService.setCurrentLanguageByShort(languageShort);
    this.messages = this.languageService.getCurrentLanguage().messages;
  }


}
