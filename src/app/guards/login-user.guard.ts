import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AccountLogService} from "../shared/account-log.service";

@Injectable({
  providedIn: 'root'
})
export class LoginUserGuard implements CanActivate {
  constructor(private acService:AccountLogService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let logged = this.acService.isLoggedIn();
    if (logged){
      return true
    }
    this.router.navigate(["login"]);
    return false;
  }

}
