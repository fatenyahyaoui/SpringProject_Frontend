import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SigninService}from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers:[SigninService]
})
export class SigninComponent implements OnInit {
  user: any = {};
  code:any;
  err:any;
  Str:any;
    constructor( private router: Router,private s:SigninService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("userC"));
    //console.log(this.user.id_etr);
    if (this.user==null){
      this.router.navigate(['/signin']);
    }
    else{
      this.router.navigate(['/indexacheteur']);
    }
  }

 
  login(mail:any,pass:any)
  {

    console.log("aaaaaaaaaaaaaaaaaaaa");
this.s.getLoginAuth(mail.value,pass.value)
.subscribe(successCode=>{
  this.code=successCode;
  console.log(successCode);
  if(successCode.avatar==null){
  this.Str ="verifier votre login et mot de passe";

}
else{
  console.log("Taagg "+this.code);
  localStorage.setItem("authenticatedC",'true');
  localStorage.setItem("loginC",this.code); 
  localStorage.setItem("userC",JSON.stringify(this.code));  
  this.user = JSON.parse(localStorage.getItem("userC"));
  console.log("tester variable session Acheteur:"+this.user.acheteurId);
  this.router.navigate(['/indexacheteur']);
}
 },error=>{this.err=error});
}

}
