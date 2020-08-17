import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rx';


type extractDataType = JSON;

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  executeGet(url: string) {
    this.http.get(url)
      .pipe(map(res => res.json()))
      .catch(this.handleError);
  }

  extractData(res: HttpResponse<extractDataType>) {
    return res.ok;
  }

  handleError(error: any) {
    return Observable.throw(error);
  }
}
