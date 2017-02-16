import { Component } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var module:{
  id:string;
};

@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html',
  styleUrls:['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  name = 'Angular';
  title = 'Tour of Heroes';
  selectedHero:Hero;
  heroes : Hero[];

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  constructor(
    private heroService:HeroService,
    private router:Router,
  ){}  //This technique is used to define and declare variables instead of using the method above

  getHeroes():void{
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);  //This code gets the HEROES array from the hero-service to the local heroes array
  }

  goToDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

  ngOnInit():void{
    this.getHeroes(); //This code runs as soon as the component is executed
  }
}
