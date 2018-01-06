import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import {Entreprise}from './entreprise';
import{Router}from '@angular/router'
@Component({
  selector: 'app-profilvendeur',
  templateUrl: './profilvendeur.component.html',
  styleUrls: ['./profilvendeur.component.css'],
  providers:[ProfileService]
})
export class ProfilvendeurComponent implements OnInit {
private user:any;
private et=new Entreprise;
  model = {
    left: true,
    middle: false,
    right: false
};

  constructor(private s:ProfileService,private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    
  }
 processForm(nom:any,siege:any,site:any,effectif:any,mail:any,date:any,secteur:any,desc:any){
  console.log(nom.value);
  this.et.nom_ent=nom.value+"";
  this.et.siege=siege.value;
  this.et.siteweb=site.value;
  this.et.logo=this.user.logo;
  this.et.password=this.user.password;
  this.et.login=this.user.login;
  this.et.etat_compt_etr=this.user.etat_compt_etr;
  this.et.popularite=this.user.popularite;
  this.et.effectif=effectif.value;
  this.et.email_etr=mail.value+"";
  this.et.fondation=date.value;
  this.et.secteur_etr=secteur.value;
  this.et.descreption_etr=desc.value;
  this.et.id_etr=this.user.id_etr;
  this.s.updateEntreprise(this.et).subscribe((entreprise)=>{
    this.router.navigate(["/listeoffre"]);
    console.log(entreprise);
      },(error)=>{
    console.log(error);
  });
  }


  




}