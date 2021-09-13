import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {UserComponent} from "./components/user/user.component";
import {LoginSignComponent} from "./components/login-sign/login-sign.component";
import {LoginUserGuard} from "./guards/login-user.guard";
import {UserDetailComponent} from "./components/about/user-detail/user-detail.component";

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'userDetail', component:UserDetailComponent},
  {path: 'users', component:UserComponent, canActivate:[LoginUserGuard]},
  {path: 'login', component:LoginSignComponent},
  {path: '**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
