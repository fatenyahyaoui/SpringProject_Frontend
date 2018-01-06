import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Entreprise} from './entreprise';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProfileService {
  private errorHandler:any;
  private baseUrl:string="//localhost:8080/apientreprise";
  private headers = new Headers({'Content-type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
 
  constructor(private _http:Http,private router:Router) { }
  
 

  updateEntreprise(entreprise:Entreprise){
    
    return this._http.put(this.baseUrl+'/entreprise', JSON.stringify(entreprise), this.options).map((response:Response)=>response.json());
  }

}