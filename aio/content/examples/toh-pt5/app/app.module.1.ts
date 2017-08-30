
// #docregion import-router
import { RouterModule }   from '@angular/router';
// #enddocregion import-router

// #docregion add-routes
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
// #enddocregion add-routes

    // #docregion dashboard
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    // #enddocregion dashboard

    // #docregion redirect
    {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
// #enddocregion redirect

// #docregion full-post-heroservice
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
     },
     {
         path: 'dashboard',
         component: DashboardComponent
     },
     {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// #enddocregion full-post-heroservice

      // #docregion hero-detail
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      // #enddocregion hero-detail