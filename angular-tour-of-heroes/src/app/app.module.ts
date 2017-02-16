//This file deals with all the components and modules which are required as dependencies to all other modules. Any new module must be registered with the declarations array

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService]
})
export class AppModule { }
