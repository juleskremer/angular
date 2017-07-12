import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
=======
import { AppComponent }        from './app.component';
// #docregion hero-detail-import
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// #enddocregion hero-detail-import
>>>>>>> updating first few sections with CLI

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
