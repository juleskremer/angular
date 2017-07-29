
// #docregion new-service
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  constructor() { }

}
// #enddocregion new-service

// #docregion get-heroes-stub
getHeroes(): void {} // stub
// #enddocregion get-heroes-stub

// #docregion service-1
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
// #enddocregion service-1