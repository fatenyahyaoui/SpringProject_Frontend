import { Injectable } from '@angular/core';
import {  Headers, URLSearchParams } from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs/Rx';
import { Http,Response, RequestOptions } from '@angular/http';
@Injectable()
export class SigninVendService {

  constructor(private http:Http) { }

  isAuthenticated(){
    var autheticated = localStorage.getItem("authenticated");
    if(autheticated == 'true'){
        return true ;
    }else {
        return false ;
    }
}

  getLoginAuth(mail:string,pass:string): Observable<any> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let cpParams = new URLSearchParams();
    cpParams.set('mail', mail);			
    cpParams.set('pass', pass);			
		let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
    return this.http.get("http://localhost:8080/apientreprise/login",options)
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
