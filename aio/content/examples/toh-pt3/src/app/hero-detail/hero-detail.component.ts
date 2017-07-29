<<<<<<< HEAD
<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

=======
// #docregion
// #docregion import-input
=======
>>>>>>> restructure of tutorial for appshell
import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

<<<<<<< HEAD
// #docregion hero-detail-import
import { Hero } from '../hero';
// #enddocregion hero-detail-import

// #docregion template
>>>>>>> updating first few sections with CLI
=======
>>>>>>> restructure of tutorial for appshell
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> restructure of tutorial for appshell
export class HeroDetailComponent implements OnInit {


  // #docregion hero
<<<<<<< HEAD
  @Input() hero: Hero;
  // #enddocregion hero
=======
// #enddocregion template
// #docregion class
export class HeroDetailComponent implements OnInit{
// #docregion hero
  @Input() hero: Hero;
// #enddocregion hero
>>>>>>> updating first few sections with CLI
=======
  @Input() hero: Hero;
  // #enddocregion hero
>>>>>>> restructure of tutorial for appshell

  constructor() { }

  ngOnInit() {
  }

}
<<<<<<< HEAD
<<<<<<< HEAD
=======
// #enddocregion class
>>>>>>> updating first few sections with CLI
=======
>>>>>>> restructure of tutorial for appshell
