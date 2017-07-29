// #docregion hero
  hero: Hero;
// #enddocregion hero

// #docregion import-input
import { Component, OnInit, Input } from '@angular/core';
// #enddocregion import-input

// #docregion initial-component
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// #enddocregion initial-component