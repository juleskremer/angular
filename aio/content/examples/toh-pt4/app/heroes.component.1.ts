  // #docregion heroes-prop
  heroes: Hero[];
  // #enddocregion heroes-prop

// #docregion hero-service-import
import { HeroService } from '../hero.service';
// #enddocregion hero-service-import

  /*
  // #docregion new-service
  heroService = new HeroService(); // don't do this
  // #enddocregion new-service
  */

    // #docregion ctor
  constructor(private heroService: HeroService) { }
  // #enddocregion ctor

   // #docregion providers
  providers: [HeroService]
  // #enddocregion providers

    // #docregion getHeroes
  getHeroes(): void {
    // #docregion get-heroes
    this.heroes = this.heroService.getHeroes();
    // #enddocregion get-heroes
  }
  // #enddocregion getHeroes

    // #docregion ng-on-init
  ngOnInit(): void {
    this.getHeroes();
  }
  // #enddocregion ng-on-init