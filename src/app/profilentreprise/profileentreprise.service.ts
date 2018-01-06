import { Injectable } from '@angular/core';
import {  Headers, URLSearchParams } from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs/Rx';
import { Http,Response, RequestOptions } from '@angular/http';

@Injectable()
export class ProfileentrepriseService {

  constructor(private http:Http) { }

  getAllArticles(id:string): Observable<any> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let cpParams = new URLSearchParams();
		cpParams.set('id', id);			
		let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
    return this.http.get("http://localhost:8080/apioffre/OffreByID",options)
       .map(this.extractData)
        .catch(this.handleError);

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
