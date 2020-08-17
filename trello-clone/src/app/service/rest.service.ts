import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';


type extractDataType = JSON;

@Injectable({
  providedIn: 'root'
})
export class RestService {
  data: any = null;

  constructor(private http: HttpClient) { }

  executeGet(url: string) {
    this.http.get(url)
      .pipe(map(this.extractData));
    // this.http.get(url)
    //   .subscribe(data => {
    //     this.data = data;
    //   });

    // tslint:disable-next-line: no-unused-expression
    this.handleError;

  }

  extractData(res: HttpResponse<extractDataType>) {
    return res.ok;
  }

  handleError(error: any) {
    // tslint:disable-next-line: deprecation
    return Observable.throw(error);
  }
}
