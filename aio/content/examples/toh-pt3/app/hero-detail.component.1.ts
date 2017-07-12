<<<<<<< HEAD
// #docregion hero
  hero: Hero;
// #enddocregion hero

// #docregion import-input
import { Component, OnInit, Input } from '@angular/core';
// #enddocregion import-input

// #docregion initial-component
import { Component, OnInit } from '@angular/core';
=======
// #docplaster
// #docregion v1
import { Component, OnInit } from '@angular/core';

// #enddocregion v1
// #docregion hero-detail-import
import { Hero } from '../hero';
// #enddocregion hero-detail-import
>>>>>>> updating first few sections with CLI

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
<<<<<<< HEAD
})
export class HeroDetailComponent implements OnInit {

=======
  // #enddocregion v1
// #docregion v1
})
export class HeroDetailComponent implements OnInit{
// #enddocregion v1
// #docregion hero
  hero: Hero;
// #enddocregion hero
// #docregion v1
>>>>>>> updating first few sections with CLI
  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD

}
// #enddocregion initial-component
=======
}
// #enddocregion v1
>>>>>>> updating first few sections with CLI
