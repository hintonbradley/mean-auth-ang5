import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {};

  constructor(private apiService: ApiService) {}

  loginUser () {
    // console.log(this.registerData);
    this.apiService.loginUser(this.loginData);
  }

  ngOnInit() {
  }

}