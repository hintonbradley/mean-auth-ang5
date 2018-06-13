import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getMessage() {
    this.http.get('http://localhost:3000/posts').subscribe(res => {
      console.log(res);
    })
  }

  addNewUser(userData) {
    console.log(userData);
    this.http.post('http://localhost:3000/register', userData).subscribe(res => {
      console.log(res);
    })
  }

  loginUser(loginData) {
    console.log(loginData);
    this.http.post('http://localhost:3000/register', loginData).subscribe(res => {
      console.log(res);
    })
  }

}
