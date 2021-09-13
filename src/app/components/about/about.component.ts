import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  userData!:any;
  userId:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }


  getAllUsers(){
    this.api.getUsers().subscribe(res => {
      this.userData = res;
      console.log(this.userData)


    });
  };

  getUserById(data:any){
    this.api.getUserById(data).subscribe(res=>{
      this.userId = res;
      console.log(this.userId)
    })
  };



}
