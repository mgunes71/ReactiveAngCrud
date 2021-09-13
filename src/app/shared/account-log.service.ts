import {Injectable} from '@angular/core';
import {UserLogin} from "../models/user-login";

@Injectable({
  providedIn: 'root'
})
export class AccountLogService {

  constructor() {
  }

  loggedIn = false;

  login(user: UserLogin): boolean {
    if (user.email != "mgnes95@gmail.com" && user.password != "2565583m") {
      alert("Email or pass is incorrect");
      return false

    }
    this.loggedIn = true;
    localStorage.setItem("isLogged", JSON.stringify({
      email: user.email,
      password: user.password
    }));

    return true;
  };

  isLoggedIn(){
    return this.loggedIn;
  };

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  };
}


