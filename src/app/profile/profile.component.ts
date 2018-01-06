import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import {Router}from '@angular/router';
import {AcheteurService}from'../signup/acheteur.service';
import {Acheteur}from'../signup/acheteur';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers:[AcheteurService]
})

export class ProfileComponent implements OnInit {
   private user:any;
    model = {
        left: true,
        middle: false,
        right: false
    };
    val:any;
    constructor(private router:Router,private c:AcheteurService) { }
  
    ngOnInit() {
        this.user=JSON.parse(localStorage.getItem("userC"));
        if (!this.user)
        {
            this.router.navigate(['signin']);
        }
        else{
            this.router.navigate(['/profile']);
        }
    }
    UpdateProfil(nom:any,prenom:any,adr:any,pass:any,code:any,tel:any,email:any)
{  
         let acheteur= new Acheteur (this.user.acheteurId,nom.value,prenom.value,adr.value, code.value,this.user.avatar, tel.value, email.value, pass.value);	  	  
         this.c.updateAcheteur(acheteur).subscribe(val=>{
         this.val=val;
         })
     // console.log(this.val);
     this.router.navigate(['/indexacheteur']);
   }
   deconnexion(){
   
     localStorage.setItem("userC",null);
     localStorage.setItem("loginC",null);
     localStorage.setItem("authenticatedC",null);      
     localStorage.removeItem("authenticatedC");
     localStorage.removeItem("loginC");
     localStorage.removeItem("userC");
     localStorage.clear();
     this.user = JSON.parse(localStorage.getItem("userC"));
     console.log("tester variable session:"+this.user);
     this.router.navigate(['/landing']);
 
   
     
   }}
