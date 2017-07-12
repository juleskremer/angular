// #docregion
// #docregion import-input
import { Component, OnInit, Input } from '@angular/core';
// #enddocregion import-input

// #docregion hero-detail-import
import { Hero } from '../hero';
// #enddocregion hero-detail-import

// #docregion template
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
// #enddocregion template
// #docregion class
export class HeroDetailComponent implements OnInit{
// #docregion hero
  @Input() hero: Hero;
// #enddocregion hero

  constructor() { }

  ngOnInit() {
  }

}
// #enddocregion class
