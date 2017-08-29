// #docregion initial-component
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
// #enddocregion initial-component

  // #docregion add-hero
  hero = 'Windstorm';
  // #enddocregion add-hero
