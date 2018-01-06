import { Component, OnInit } from '@angular/core';

import { EntrepriseService } from '../signupvendeur/entreprise.service';
import { Entreprise } from '../signupvendeur/entreprise';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-recruteur',
  templateUrl: './liste-vendeur.component.html',
  styleUrls: ['./liste-vendeur.component.css']
})
export class ListeVendeurComponent implements OnInit {
  private entreprises:Entreprise[];
  private id:any;
    constructor(private _entrepriseService:EntrepriseService, private _router:Router) { }
  
    ngOnInit() {
      
      this._entrepriseService.getEntreprises().subscribe((entreprises)=>{
        console.log(entreprises);
        this.entreprises=entreprises;
      },(error)=>{
        console.log(error);
      });
      }

      deleteEntreprise(entreprise){
        this._entrepriseService.deleteEntreprise(entreprise.id_etr).subscribe((data)=>{
          this.entreprises.splice(this.entreprises.indexOf(entreprise),1);
        },(error)=>{
          console.log(error);
        });
        window.location.reload();
      }
      confimerCompte(id:any){
        this._entrepriseService.confirmerCompte(id).subscribe((id)=>{
          console.log(id);
          this.id=id;
        },(error)=>{
          console.log(error);
        });
     window.location.reload();
   
  }


      verifValid(a:any){
      console.log("etat :"+a);
      if(a==1)
      return true;
      }
  
  
  }

