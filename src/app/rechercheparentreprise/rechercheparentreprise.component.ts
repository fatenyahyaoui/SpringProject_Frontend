import {Http, Response,Headers} from '@angular/http';
import 'rxjs/Rx';

import {EventEmitter, Injectable} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {RechercheserviceService} from './rechercheservice.service';
@Component({
  selector: 'app-rechercheparentreprise',
  templateUrl: './rechercheparentreprise.component.html',
  styleUrls: ['./rechercheparentreprise.component.css'],
  providers: [RechercheserviceService]
})
export class RechercheparentrepriseComponent implements OnInit {

  
  
  user:any;
  items:any ;
  error:any;
  i:any;
  res:any;
  constructor(private router:Router,private rechService:RechercheserviceService) {
    
        }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("userC"));
    //console.log(this.user.id_etr);
    if (this.user==null){
      this.router.navigate(['/signin']);
    }
    else{
      this.router.navigate(['/rechercheparentreprise']);
    }
      this.rechService.getOffres().subscribe(
      data =>{this.items = data},
      err => {console.log(err)},
      () => {console.log(this.items[0])},
    ) ; 
    
  }
  modifProfile(){
    this.router.navigate(['/profile']);
  }
  deconnexion(){
    // console.log("aaaaaaaaaaaadeccc");
     localStorage.setItem("userC",null);
     localStorage.setItem("loginC",null);
     localStorage.setItem("authenticatedC",null);      
     localStorage.removeItem("authenticatedC");
     localStorage.removeItem("loginC");
     localStorage.removeItem("userC");
     localStorage.clear();
   //  this.user = JSON.parse(localStorage.getItem("user"));
     //console.log("tester variable session:"+this.user);
     this.router.navigate(['/signin']);
 
   //  this.router.navigate(['/signinrecruteur']);
     
   }


    private newFunction() {
        console.log(this.items);
    }
  
   

}
