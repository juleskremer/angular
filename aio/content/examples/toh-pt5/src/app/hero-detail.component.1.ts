// Imports in comments cause problems when the app is executed
// (some error about 'traceur' missing). Hence this separate file
// is solely for containing the transitory state of the imports.

// #docregion added-imports
// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../hero.service';
// #enddocregion added-imports

  // #docregion ctor
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  // #enddocregion ctor