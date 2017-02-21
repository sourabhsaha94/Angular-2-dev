//This class's main use is to modularize code into differect sections. This section deals with the displaying of a selected hero's details.

import {Component , Input, OnInit} from '@angular/core';
import {Hero} from './hero';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from './hero.service';

import 'rxjs/add/operator/switchMap';

declare var module:{
  id:string;
}

@Component({
  moduleId:module.id,
  selector:'my-hero-detail',  //This selector should be same as that mentioned in app-component
  templateUrl:'./hero-detail.component.html', //ngIf is satisfied when there is some data in 'hero' and this hero object must have a @Input property
  styleUrls:['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
  @Input()
  hero: Hero;

  constructor(
    private heroService:HeroService,
    private route:ActivatedRoute,
    private location:Location
  ){}

  ngOnInit():void{
    this.route.params.switchMap((params:Params) => this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
  }

  goBack():void{
    this.location.back();
  }

  save():void{
    this.heroService.update(this.hero).then(()=>this.goBack());
  }
}
