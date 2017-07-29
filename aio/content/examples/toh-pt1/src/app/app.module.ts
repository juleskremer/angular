// #docregion
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';// <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
=======
=======
import { HeroesComponent } from './heroes/heroes.component';

>>>>>>> restructure of tutorial for appshell
import { FormsModule } from '@angular/forms';// <-- NgModel lives here

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent
>>>>>>> updating first few sections with CLI
=======
    AppComponent,
    HeroesComponent
>>>>>>> restructure of tutorial for appshell
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }