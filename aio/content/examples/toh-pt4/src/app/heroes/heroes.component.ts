import { Component, OnInit } from '@angular/core';

// #docregion import-hero
import {Hero} from '../hero';
// #enddocregion import-hero

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

   heroes: Hero[];

selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {

    this.getHeroes();

  }


 onSelect(hero: Hero): void {
  this.selectedHero = hero;
 }

 getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}
}