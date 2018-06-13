import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = {};

  constructor(private apiService: ApiService) {}

  postNewUser () {
    // console.log(this.registerData);
    this.apiService.addNewUser(this.registerData);
  }

  ngOnInit() {
  }

}
