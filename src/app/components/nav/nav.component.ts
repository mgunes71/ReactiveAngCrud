import { Component, OnInit } from '@angular/core';
import {AccountLogService} from "../../shared/account-log.service";

import {UserModel} from "../../models/UserModel";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user:UserModel

  constructor(private acService:AccountLogService) { }

  ngOnInit(): void {
  }

  isLoggedin(){
    return this.acService.isLoggedIn();
  };





  logOut(){
    this.acService.logOut();
  }







}
