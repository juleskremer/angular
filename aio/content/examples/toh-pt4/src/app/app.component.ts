<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from '@angular/core';
=======
// #docplaster
// #docregion

// #docregion oninit-declaration
import { Component, OnInit } from '@angular/core';
// #enddocregion oninit-declaration

import { Hero } from './hero';
// #docregion hero-service-import
import { HeroService } from './hero.service';
// #enddocregion hero-service-import
>>>>>>> updating first few sections with CLI
=======
import { Component } from '@angular/core';
>>>>>>> restructure of tutorial for appshell

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
