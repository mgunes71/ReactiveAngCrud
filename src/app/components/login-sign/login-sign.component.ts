import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../../models/user-login";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountLogService} from "../../shared/account-log.service";

@Component({
  selector: 'app-login-sign',
  templateUrl: './login-sign.component.html',
  styleUrls: ['./login-sign.component.css']
})
export class LoginSignComponent implements OnInit {
  model: UserLogin = new UserLogin();
  userForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl("", Validators.required)
  });

  constructor(private acService:AccountLogService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.model = this.userForm.value;
    this.acService.login(this.model);
    console.log(this.model.email);
    console.log(this.model.password);
    console.log(this.acService.isLoggedIn());
  }

}
