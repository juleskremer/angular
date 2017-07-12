<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

=======
// #docregion
// #docregion import-input
import { Component, OnInit, Input } from '@angular/core';
// #enddocregion import-input

// #docregion hero-detail-import
import { Hero } from '../hero';
// #enddocregion hero-detail-import

// #docregion template
>>>>>>> updating first few sections with CLI
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
<<<<<<< HEAD
export class HeroDetailComponent implements OnInit {


  // #docregion hero
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

  constructor() { }

  ngOnInit() {
  }

}
<<<<<<< HEAD
=======
// #enddocregion class
>>>>>>> updating first few sections with CLI
