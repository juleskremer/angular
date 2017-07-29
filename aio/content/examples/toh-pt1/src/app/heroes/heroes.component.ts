import { Component, OnInit } from '@angular/core';

// #docregion hero-class-1
export class Hero {
  id: number;
  name: string;
}
// #enddocregion hero-class-1

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


    // #docregion hero-property-1
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // #enddocregion hero-property-1
  
  constructor() { }

  ngOnInit() {
  }

}
