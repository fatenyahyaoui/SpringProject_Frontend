import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Offre} from './offre';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class OffreService {
  private baseUrl:string="//localhost:8080/apioffre";
  private headers = new Headers({'Content-type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private offre = new Offre;
  private a:any;
  private b:any;
  public imageo:String;
  constructor(private _http:Http) { }

  getOffres(){
    
          return this._http.get(this.baseUrl+'/offres',this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
      }
      getOffresEtr(id:any){
        
              return this._http.get(this.baseUrl+'/OffreByID?id='+id,this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
          }
  getOffre(id_offre:Number){
        
          return this._http.get(this.baseUrl+'/offre/'+id_offre,this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
      }
    
  deleteOffre(id_offre:Number){
        
          return this._http.delete(this.baseUrl+'/offre/'+id_offre,this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
      }
    
      SendIdEntr(nom:string,categorie:string,telephone:string,prix:string,lieu:string,date:string,apropos:string,idtr:string,image:string){
         
        
          return this._http.get("http://localhost:8080/apioffre/test?nom="+nom+"&categorie="+categorie+"&telephone="+telephone+"&prix="+prix+"&lieu="+lieu+"&date="+date+"&apropos="+apropos+"&idtr="+idtr+"&image="+image,this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
      }
  
      
    
private extractData(res: Response) {
    let body = res.json();
      return body;
  }
  private handleError (error: Response | any) {
  console.error(error.message || error);
  return Observable.throw(error.status);
  }
    
  updateOffre(offre:Offre){
            return this._http.put(this.baseUrl+'/offre', JSON.stringify(offre), this.options).map((response:Response)=>response.json())._catch(this.errorHandler)
      }
      
  errorHandler(error:Response){
        return Observable.throw(error||"Erreur de serveur");
      }
    
  setter(offre:Offre){
          this.offre=offre;
      }
    
  getter(){
          return this.offre;
      }

  isUpdateSet(a:any){
    this.a=a;
  }
  isUpdateGet(){
    return this.a;
  }
  isUpdateSet1(a:any){
    this.b=a;
  }
  isUpdateGet1(){
    return this.b;
  }
}
