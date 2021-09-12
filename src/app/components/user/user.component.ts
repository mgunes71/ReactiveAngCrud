import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  reacForm!: FormGroup;
  showAdd!:boolean;
  showUpdate!:boolean

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.reacForm = this.formBuilder.group({
      fullname:[''],
      email: [''],
      phone: [''],
      role:[''],
    });
  }

  clickAddEmploye(){
    this.reacForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  };

}
