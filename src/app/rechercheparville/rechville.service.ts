import { Injectable } from '@angular/core';

import { URLSearchParams, RequestOptions } from '@angular/http';

import {Http, Response,Headers} from '@angular/http';
import 'rxjs/Rx';
import {EventEmitter} from '@angular/core';
import{Observable} from 'rxjs/Rx'
@Injectable()
export class RechVilleService {

  constructor(private http: Http) { }
 
getOffres(): Observable<any> {
  return this.http.get("http://localhost:8080/apioffre/offres")
  .map((res: Response) => {
    return res.json();
  })
}
private extractData(res: Response) {
  let body = res.json();
    return body;
}
private handleError (error: Response | any) {
console.error(error.message || error);
return Observable.throw(error.status);
}
  
}
