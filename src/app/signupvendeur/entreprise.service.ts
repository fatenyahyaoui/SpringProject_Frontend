import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Entreprise} from './entreprise';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EntrepriseService {
  private baseUrl:string="//localhost:8080/apientreprise";
  private headers = new Headers({'Content-type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private entreprise= new Entreprise;
  constructor(private _http:Http,private router:Router) { }

  confirmerCompte(id:any){
    var headers = new Headers();
    headers.append('Content-type','Application/json');
    return this._http.post('http://localhost:8080/apientreprise/confirmer',JSON.stringify(id),{headers:headers})
    .map(
        (response: Response) => {
            return response.json();
        }
    );

}

  getEntreprises(){

      return this._http.get(this.baseUrl+'/entreprises',this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
  }

  getEntreprise(id_etr:Number){
    
          return this._http.get(this.baseUrl+'/entreprise/'+id_etr,this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
      }

  deleteEntreprise(id_etr:Number){
    
          return this._http.delete(this.baseUrl+'/entreprise/'+id_etr,this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
      }

  createEntreprise(entreprise:Entreprise){

      return this._http.post(this.baseUrl+'/entreprise', JSON.stringify(entreprise), this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
  }

  updateEntreprise(entreprise:Entreprise){
    
          return this._http.put(this.baseUrl+'/entreprise', JSON.stringify(entreprise), this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
      }
updateProfil(nom:any,siege:any,site:any,effectif:any,mail:any,date:any,secteur:any,desc:any,idtr){
        
    return this._http.get("http://localhost:8080/apioffre/test?nom="+nom+"&siege="+siege+"&secteur="+secteur+"&site="+site+"&effectif="+effectif+"&date="+date+"&mail="+mail+"&idtr="+idtr+"&desc="+desc,this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
}
  errorHandler(error:Response){
    return Observable.throw(error||"Erreur de serveur");
  }

  setter(entreprise:Entreprise){
      this.entreprise=entreprise;
  }

  getter(){
      return this.entreprise;

  }
}
