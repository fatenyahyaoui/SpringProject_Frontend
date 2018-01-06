import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SigninVendService}from'./signin-vend.service';
@Component({
  selector: 'app-signinvendeur',
  templateUrl: './signinvendeur.component.html',
  styleUrls: ['./signinvendeur.component.css'],
  providers:[SigninVendService]
})
export class SigninvendeurComponent implements OnInit {
  user: any = {};
  code:any;
  err:any;
  Str:any;
    constructor( private router: Router,private s:SigninVendService) { }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
    if (this.user==null){
      this.router.navigate(['/signinvendeur']);
    }
    else{
      this.router.navigate(['/listeoffre']);
    } 
   
  }

  login(mail:any,pass:any)
  {

this.s.getLoginAuth(mail.value,pass.value)
.subscribe(successCode=>{this.code=successCode

  if(this.code.nom_ent==null){
  this.Str ="Verifier login et mot de passe";
}else{
  localStorage.setItem("authenticated",'true');
  localStorage.setItem("login",this.code); 
  localStorage.setItem("user",JSON.stringify(this.code));  
  this.router.navigate(['/listeoffre']);
}
 },error=>{this.err=error});
}
}