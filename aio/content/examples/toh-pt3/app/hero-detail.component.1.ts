<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> restructure of tutorial for appshell
// #docregion hero
  hero: Hero;
// #enddocregion hero

// #docregion import-input
import { Component, OnInit, Input } from '@angular/core';
// #enddocregion import-input
<<<<<<< HEAD

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
=======

// #docregion initial-component
import { Component, OnInit } from '@angular/core';
>>>>>>> restructure of tutorial for appshell

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
<<<<<<< HEAD
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
=======
})
export class HeroDetailComponent implements OnInit {

>>>>>>> restructure of tutorial for appshell
  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD
<<<<<<< HEAD

}
// #enddocregion initial-component
=======
}
// #enddocregion v1
>>>>>>> updating first few sections with CLI
=======

}
// #enddocregion initial-component
>>>>>>> restructure of tutorial for appshell
