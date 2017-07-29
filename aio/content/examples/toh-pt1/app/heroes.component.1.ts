import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    // #docregion add-hero
  hero = 'Windstorm';
  // #enddocregion add-hero
  
  constructor() { }

  ngOnInit() {
  }

}
