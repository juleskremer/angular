// #docregion
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';// <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
=======
import { FormsModule } from '@angular/forms';// <-- NgModel lives here

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
>>>>>>> updating first few sections with CLI
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }