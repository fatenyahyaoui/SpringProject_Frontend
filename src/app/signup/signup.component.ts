import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Http} from '@angular/http';
import { AcheteurService } from './acheteur.service';
import { Acheteur } from './acheteur';
import { Router } from '@angular/router';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    @ViewChild('fileInput') fileInput: ElementRef;
    private acheteur:Acheteur;
    files: FileList;
    private ch:any;
    public l1: String;
    public al: String = 'right';
    public file_srcs: string[] = [];
    public debug_size_before: string[] = [];
    public debug_size_after: string[] = [];
  
     //Component properties
   allAcheteurs: Acheteur[];
   statusCode: number;
   requestProcessing = false;
   acheteurIdToUpdate = null;
   processValidation = false;
   //Create form
   acheteurForm = new FormGroup({
       nom_acheteur: new FormControl('', Validators.required),
       prenom_acheteur: new FormControl('', Validators.required),
       adresse_acheteur: new FormControl('', Validators.required),
       code_postale: new FormControl('', Validators.required),
       avatar: new FormControl('', Validators.required),
       tel_acheteur: new FormControl('', Validators.required),
       mail: new FormControl('', Validators.required),
       password: new FormControl('', Validators.required)	   
   });
   //Create constructor to get service instance
   constructor(private router:Router,private acheteurService: AcheteurService, private http: Http) {
}
//Create ngOnInit() and and load acheteurs
ngOnInit(): void {
    this.getAllAcheteurs();
}   
//Fetch all acheteurs
getAllAcheteurs() {
     this.acheteurService.getAllAcheteurs()
       .subscribe(
             data => this.allAcheteurs = data,
             errorCode =>  this.statusCode = errorCode);   
           
           //  this.router.navigate(['/signin']);
             
            }
//Handle create and update acheteur
onAcheteurFormSubmit() {
   this.processValidation = true;   
   if (this.acheteurForm.invalid) {
        return; //Validation failed, exit from method.
   }   
   //Form is valid, now perform create or update
   this.preProcessConfigurations();
    let nom_acheteur = this.acheteurForm.get('nom_acheteur').value.trim();
 let prenom_acheteur = this.acheteurForm.get('prenom_acheteur').value.trim();	 
  let adresse_acheteur = this.acheteurForm.get('adresse_acheteur').value.trim();
 let code_postale = this.acheteurForm.get('code_postale').value.trim();	 
  let avatar = this.acheteurForm.get('avatar').value.trim();
 let tel_acheteur = this.acheteurForm.get('tel_acheteur').value.trim();	 
   let mail = this.acheteurForm.get('mail').value.trim();
 let password = this.acheteurForm.get('password').value.trim();	  
}
//Inscription acheteur
CreateAcheteur()
{
    this.preProcessConfigurations();
      let nom_acheteur = this.acheteurForm.get('nom_acheteur').value.trim();
 let prenom_acheteur = this.acheteurForm.get('prenom_acheteur').value.trim();	 
  let adresse_acheteur = this.acheteurForm.get('adresse_acheteur').value.trim();
 let code_postale = this.acheteurForm.get('code_postale').value.trim();	 
  let avatar = this.ch;
 let tel_acheteur = this.acheteurForm.get('tel_acheteur').value.trim();	 
   let mail = this.acheteurForm.get('mail').value.trim();
 let password = this.acheteurForm.get('password').value.trim();	

              let acheteur= new Acheteur (null, nom_acheteur, prenom_acheteur, adresse_acheteur, code_postale,avatar, tel_acheteur, mail, password);	  	  
     this.acheteurService.createAcheteur(acheteur)
       .subscribe(successCode => {
                 this.statusCode = successCode;
                 
                 this.getAllAcheteurs();	
                 this.backToCreateAcheteur();
             },
             errorCode => this.statusCode = errorCode);
             setTimeout(() => 
             {
                 this.router.navigate(['/signin']);
             },
             5000);
            }
//Load acheteur by id to edit
loadAcheteurToEdit(acheteurId: string) {
   this.preProcessConfigurations();
   this.acheteurService.getAcheteurById(acheteurId)
       .subscribe(acheteur => {
                 this.acheteurIdToUpdate = acheteur.acheteurId;   
                 this.acheteurForm.setValue({ nom_acheteur: acheteur.nom_acheteur, prenom_acheteur: acheteur.prenom_acheteur, adresse_acheteur: acheteur.adresse_acheteur, code_postale: acheteur.code_postale, avatar: acheteur.avatar, tel_acheteur: acheteur.tel_acheteur, mail: acheteur.mail, password: acheteur.password });
                 this.processValidation = true;
                 this.requestProcessing = false;   
             },
             errorCode =>  this.statusCode = errorCode);   
}

//update acheteur
UpdateAcheteur(files){
    this.preProcessConfigurations();
    let nom_acheteur = this.acheteurForm.get('nom_acheteur').value.trim();
let prenom_acheteur = this.acheteurForm.get('prenom_acheteur').value.trim();	 
let adresse_acheteur = this.acheteurForm.get('adresse_acheteur').value.trim();
let code_postale = this.acheteurForm.get('code_postale').value.trim();	 
let avatar = this.acheteurForm.get('avatar').value.trim();
let tel_acheteur = this.acheteurForm.get('tel_acheteur').value.trim();	 
 let mail = this.acheteurForm.get('mail').value.trim();
let password = this.acheteurForm.get('password').value.trim();	

let acheteur= new Acheteur(this.acheteurIdToUpdate, nom_acheteur, prenom_acheteur, adresse_acheteur, code_postale, avatar, tel_acheteur, mail, password);	  
this.acheteurService.updateAcheteur(acheteur)
  .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllAcheteurs();	
            this.backToCreateAcheteur();
        },
        errorCode => this.statusCode = errorCode);	 
}

//Perform preliminary processing configurations
preProcessConfigurations() {
   this.statusCode = null;
   this.requestProcessing = true;   
}
//Go back from update to create
backToCreateAcheteur() {
   this.acheteurIdToUpdate = null;
   this.acheteurForm.reset();	  
   this.processValidation = false;
}

 /*fileChange(event:any){
    console.log(event.target.files[0].name);
    this.entreprise.logo = event.target.files[0].name;
    this.file = event.target.files[0];
    
  }*/

  fileChanged(e: Event){
    const fi =  this.fileInput.nativeElement;
    const fileToUpload = fi.files[0];
    this.http.put(`https://angular2.apispark.net/v1/files/${fileToUpload.name}`,
    fileToUpload).subscribe(res => {
    console.log(res);
         });
         this.ch=`https://angular2.apispark.net/v1/files/${fileToUpload.name}`;
         console.log(this.ch);
   }
 
 }
 

 