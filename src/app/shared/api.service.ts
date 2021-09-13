import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = "http://localhost:3000/";

  // userData: any;

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<any>(this.path + 'posts').pipe(
      map((res: any) => {
        return res
      })
    );
  };

  postUser(data: any) {
    return this.http.post<any>(this.path + 'posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  };

  deleteUser(id:number){
    return this.http.delete<any>(this.path + 'posts/'+ id).pipe(
      map((res:any)=>{
        return res
      })
    );
  };

  updateUser(data:any, id:number){
    return this.http.put<any>(this.path + 'posts/' + id, data).pipe(
      map((res:any) => {
        return res
      })
    );
  };

  getUserById(id:number){
    return this.http.get<any>(this.path + 'posts/' + id).pipe(
      map((res:any)=>{
        return res
      })
    );
  };

}


