import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../../shared/api.service";
import {UserModel} from "../../models/UserModel";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  reacForm!: FormGroup;
  showAdd!:boolean;
  showUpdate!:boolean;

  userData: any;
  userModel:UserModel = new UserModel();



  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.reacForm = this.formBuilder.group({
      fullName:[''],
      email: [''],
      phone: [''],
      role:[''],
      image_url:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU']
    });
    this.getAllUsers()
  }

  clickAddEmploye(){
    this.reacForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  };
  // edite basınca değerler inputlarda gozksun dıye
  onEdit(data:any){
    this.showAdd = false;
    this.showUpdate = true;

    this.userModel.id = data.id;

    this.reacForm.controls['fullName'].setValue(data.fullName)
    this.reacForm.controls['email'].setValue(data.email)
    this.reacForm.controls['phone'].setValue(data.phone)
    this.reacForm.controls['role'].setValue(data.role)
    this.reacForm.controls['image_url'].setValue(data.image_url)
  };


  getAllUsers(){
    this.api.getUsers().subscribe(res => {
      this.userData = res;
      console.log(this.userData)
      console.log(this.reacForm)

    });
  };

  postUserdetails(){
    this.userModel.fullName = this.reacForm.value.fullName;
    this.userModel.email = this.reacForm.value.email;
    this.userModel.phone = this.reacForm.value.phone;
    this.userModel.role= this.reacForm.value.role;
    this.userModel.image_url= this.reacForm.value.image_url;

    this.api.postUser(this.userModel).subscribe(res => {
      console.log(res);
      alert('User Added')
    //  üst kısım ekledi user ı
      this.reacForm.reset();
      this.getAllUsers();
    })
  };
  updateUser(){
    this.userModel.fullName = this.reacForm.value.fullName;
    this.userModel.email = this.reacForm.value.email;
    this.userModel.phone = this.reacForm.value.phone;
    this.userModel.role= this.reacForm.value.role;
    this.userModel.image_url= this.reacForm.value.image_url;

    this.api.updateUser(this.userModel, this.userModel.id).subscribe(res =>{
      alert('Updated User');
      this.reacForm.reset();
      this.getAllUsers();
    })
  };

  deleteUserById(data:any){
    this.api.deleteUser(data).subscribe(res =>{
      alert('User  deleted');
      this.getAllUsers();
    });
  };

  // getUserById(data:any){
  //   this.api.getUserById(data).subscribe(res=>{
  //     this.userData = res;
  //     console.log(this.userData)
  //   })
  // }


}
