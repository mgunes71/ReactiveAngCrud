import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/api.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId:any

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  getUserById(data:any){
    this.api.getUserById(data).subscribe(res=>{
      this.userId = res;
      console.log(this.userId)
    })
  };

}
