//This file deals with all the components and modules which are required as dependencies to all other modules. Any new module must be registered with the declarations array

import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';

const routes:Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component:HeroDetailComponent},
  {path:'heroes',component:HeroesComponent}
];

@NgModule({
  imports:      [RouterModule.forRoot(routes)],
  exports:      [RouterModule]
})
export class AppRoutingModule { }
