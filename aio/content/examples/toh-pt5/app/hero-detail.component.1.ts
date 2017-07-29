// #docregion full-file
import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {


  // #docregion hero
  @Input() hero: Hero;
  // #enddocregion hero

  constructor() { }

  ngOnInit() {
  }

}
// #enddocregion full-file

// #docregion added-imports
// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
// #enddocregion added-imports