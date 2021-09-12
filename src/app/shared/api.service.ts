import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = "http://localhost:3000/";
  userData:any;

  constructor(private http:HttpClient) { }
}
