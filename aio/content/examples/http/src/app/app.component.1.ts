// #docplaster
// #docregion app.component.1

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements NgOnInit {
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.http.get('/api/developers').subscribe(data => {
    this.results = data['results'];
    });
  }
}
// #enddocregion app.component.1

// #docregion app.component.2

    http
     .get<DevelopersResponse>('/api/developers')
     .subscribe(
  	   data => {...},
       (err: HttpErrorResponse) => {
       if (err.error instanceof Error) {
         // A client-side or network error occurred. Handle it accordingly.
         console.log('An error occurred:', err.error.message);
       } else {
         // The backend returned an unsuccessful response code.
         // The response body may contain clues as to what went wrong,
         console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
       }
      }
// #enddocregion app.component.2
