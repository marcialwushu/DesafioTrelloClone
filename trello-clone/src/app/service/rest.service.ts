import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { from } from 'rxjs';

// const data = from(fetch('/api/endpoint'));
const serverURL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  data: any = null;

  constructor(private http: HttpClient) { }

  executeGet(url: string) {
    // this.http.get(serverURL + url)
    //   .pipe(map(this.extractData));
    // console.log(serverURL + url);
    this.http.get(serverURL + url)
      .subscribe(data => {
        this.data = data;
        console.log(data);
      });

    // tslint:disable-next-line: no-unused-expression
    this.handleError;

  }

  extractData(res) {
    return res.json();
  }

  handleError(error: any) {
    // tslint:disable-next-line: deprecation
    return Observable.throw(error);
  }
}
