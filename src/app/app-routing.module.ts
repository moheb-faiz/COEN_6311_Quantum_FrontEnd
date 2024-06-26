import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowPackagesComponent} from "./components/show-packages/show-packages.component";

import {HomeComponent} from "./components/home/home.component";
import {CustomPackagesComponent} from "./components/custom-packages/custom-packages.component";
import {UserLoginComponent} from "./components/user-login/user-login.component";
import {UserRegisterComponent} from "./components/user-register/user-register.component";
import {BookingsComponent} from "./components/bookings/bookings.component";
import {CustomBookingsComponent} from "./components/custom-bookings/custom-bookings.component";
import {NavComponent} from "./components/nav/nav.component";


const routes: Routes = [
 {path:'', component:HomeComponent},
  {path:'login', component: UserLoginComponent},
   {path:'signup', component: UserRegisterComponent},
  {path:'show', component: ShowPackagesComponent},
  {path:'custom', component: CustomPackagesComponent},
  {path:'booking/:id', component: BookingsComponent},
  {path:'custom-booking/:id', component: CustomBookingsComponent},
  {path:'navigation', component:NavComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
