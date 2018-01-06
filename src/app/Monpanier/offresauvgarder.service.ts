import { Injectable } from '@angular/core';

import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { Offresauvgarder } from './offresauvgarder';

@Injectable()

@Injectable()
export class OffresauvgarderService {

  allOffresauvgardersUrl = "http://localhost:8080/all-offresauvgarders";
  offresauvgarderUrl = "http://localhost:8080/offresauvgarder";
  //Create constructor to get Http instance

 constructor(private http:Http) { }

 //Fetch all Offresauvgarders
 getAllOffresauvgarders(id:any): Observable<any> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  let cpParams = new URLSearchParams();
  cpParams.set('id', id);			
  let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
  return this.http.get(this.allOffresauvgardersUrl, options)
      .map(this.extractData)
      .catch(this.handleError);

}
//Create Offresauvgarder
createOffresauvgarder(offresauvgarder: Offresauvgarder,id:any,id1:any):Observable<any> {
 let cpHeaders = new Headers({ 'Content-Type': 'application/json' });

   let cpParams = new URLSearchParams();
   
   
   
  
   cpParams.set('id', id);
   
  
 
   
   
   let options = new RequestOptions({ headers: cpHeaders, params: cpParams});
   this.offresauvgarderUrl="http://localhost:8080/offresauvgarder?id1="+id1;
   return this.http.post(this.offresauvgarderUrl,offresauvgarder, options)
          .map(success => success.status)
          .catch(this.handleError);
}
//Fetch Offresauvgarder by id
getOffresauvgarderById(offresauvgarderId: string): Observable<Offresauvgarder> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('id', offresauvgarderId);			
let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
return this.http.get(this.offresauvgarderUrl, options)
    .map(this.extractData)
    .catch(this.handleError);
}	

//Delete Offresauvgarder	
deleteOffresauvgarderById(offresauvgarderId: string): Observable<any> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('id', offresauvgarderId);			
let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
return this.http.delete(this.offresauvgarderUrl, options)
    .map(success => success.status)
    .catch(this.handleError);
}		
private extractData(res: Response) {
 let body = res.json();
   return body;
}
private handleError (error: Response | any) {
console.error(error);
return Observable.throw(error.status);
}

}
