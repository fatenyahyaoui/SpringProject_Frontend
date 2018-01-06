import { Component, OnInit } from '@angular/core';
import {SigninVendService}from'../signinvendeur/signin-vend.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[SigninVendService]
})
export class AdminComponent implements OnInit {
  user:any;
  constructor(private s:SigninVendService,private router:Router) { }

  ngOnInit() {
  
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
    this.router.navigate(['/signinvendeur']);

  
    
  }
}
