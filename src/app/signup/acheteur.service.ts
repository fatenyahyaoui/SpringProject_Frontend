import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { Acheteur } from './acheteur';

@Injectable()
export class AcheteurService {
   //URLs for CRUD operations
   allAcheteursUrl = "http://localhost:8080/user/all-acheteurs";
   acheteurUrl = "http://localhost:8080/user/acheteur";
   //Create constructor to get Http instance

  constructor(private http:Http) { }

  //Fetch all Acheteurs
  getAllAcheteurs(): Observable<Acheteur[]> {
    return this.http.get(this.allAcheteursUrl)
       .map(this.extractData)
        .catch(this.handleError);

}
//Create Acheteur
createAcheteur(acheteur: Acheteur):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.acheteurUrl, acheteur, options)
           .map(success => success.status)
           .catch(this.handleError);
}
//Fetch Acheteur by id
getAcheteurById(acheteurId: string): Observable<Acheteur> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('id', acheteurId);			
let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
return this.http.get(this.acheteurUrl, options)
     .map(this.extractData)
     .catch(this.handleError);
}	
//Update Acheteur
updateAcheteur(acheteur: Acheteur):Observable<any> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.acheteurUrl, acheteur, options)
           .map(success => success.status)
           .catch(this.handleError);
}
//Delete Acheteur	
deleteAcheteurById(acheteurId: string): Observable<number> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('id', acheteurId);			
let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
return this.http.delete(this.acheteurUrl, options)
     .map(success => success.status)
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

