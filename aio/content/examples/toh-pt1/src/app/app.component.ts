// #docregion
import { Component } from '@angular/core';

// #docregion hero-class-1
export class Hero {
  id: number;
  name: string;
}
// #enddocregion hero-class-1

@Component({
  selector: 'app-root',
  // #docregion editing-Hero
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // #enddocregion editing-Hero
})
export class AppComponent {
  title = 'Tour of Heroes';
  // #docregion hero-property-1
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // #enddocregion hero-property-1
}
