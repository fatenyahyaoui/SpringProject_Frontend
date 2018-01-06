import { Component, OnInit } from '@angular/core';
import {OffreService} from '../deposeroffre/offre.service';
import {Offre} from '../deposeroffre/offre';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listeoffre',
  templateUrl: './listeoffre.component.html',
  styleUrls: ['./listeoffre.component.css']
})
export class ListeoffreComponent implements OnInit {

  private offres:Offre[];
  private user:any;
  
    constructor(private _offreService:OffreService, private _router:Router) { }
  
    ngOnInit() {
      this.user = JSON.parse(localStorage.getItem("user"));
      //console.log(this.user.id_etr);
      if (this.user==null){
        this._router.navigate(['/signinvendeur']);
      }
      else{
        this._router.navigate(['/listeoffre']);
      }

      this._offreService.getOffresEtr(this.user.id_etr).subscribe((offres)=>{
        console.log(offres);
        this.offres=offres;
      },(error)=>{
        console.log(error);
      });
      }
  
      deleteOffre(offre){
        this._offreService.deleteOffre(offre.id_offre).subscribe((data)=>{
          this.offres.splice(this.offres.indexOf(offre),1);
        },(error)=>{
          console.log(error);
        });
  
      }
  
      updateOffre(offre){

        this._offreService.setter(offre);
       this._offreService.isUpdateSet("up");      
       
        this._router.navigate(['/deposeroffre',"up"])
  
      }
  naviguer(){
    this._router.navigate(["/profilvendeur"]);
  }
      createOffre(){
        let offre = new Offre();
        this._offreService.setter(offre);
        this._offreService.isUpdateSet("cr");      
        
       
        this._router.navigate(['/deposeroffre',"cr"])
  
      }

  deconnexion(){
   
     localStorage.setItem("user",null);
     localStorage.setItem("login",null);
     localStorage.setItem("authenticated",null);      
     localStorage.removeItem("authenticated");
     localStorage.removeItem("login");
     localStorage.removeItem("user");
     localStorage.clear();
     this.user = JSON.parse(localStorage.getItem("user"));
     console.log("tester variable session:"+this.user);
     this._router.navigate(['/landing']);
 
     
   }
 
  }
  
