import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// #docregion heroes-import
import { HeroesComponent } from './heroes/heroes.component';
// #enddocregion heroes-import


@NgModule({

    // #docregion declarations

    declarations: [
    AppComponent,
    HeroesComponent
  ],

      // #enddocregion declarations

  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }