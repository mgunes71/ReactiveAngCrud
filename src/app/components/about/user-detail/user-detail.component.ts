import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/api.service";
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../../../models/UserModel";



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers:[ApiService]
})
export class UserDetailComponent implements OnInit {
  user:UserModel
  use!:any

  constructor(private api:ApiService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getUserById(params["userId"])
    })
  };

  getUserById(userId){
    this.api.getUserById(userId).subscribe(res=>{
      this.user = res;
      this.use = this.user[0]
      console.log(this.use)
      console.log(this.use.email)
    })
  };

}
