import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> restructure of tutorial for appshell
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
=======
import { AppComponent }        from './app.component';
// #docregion hero-detail-import
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// #enddocregion hero-detail-import
>>>>>>> updating first few sections with CLI
=======
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
>>>>>>> restructure of tutorial for appshell

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
