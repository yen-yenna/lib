import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }
  static setLanguages(languages) {
    localStorage.setItem('languages', JSON.stringify(languages));
  }

  static getLanguages() {
    return JSON.parse(localStorage.getItem('languages'));
  }


}
