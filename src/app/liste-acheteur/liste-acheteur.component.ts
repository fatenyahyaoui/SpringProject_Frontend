import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AcheteurService } from '../signup/acheteur.service';
import { Acheteur } from '../signup/acheteur';
@Component({
  selector: 'app-liste-acheteur',
  templateUrl: './liste-acheteur.component.html',
  styleUrls: ['./liste-acheteur.component.css']
})
export class ListeAcheteurComponent implements OnInit {

  //Component properties
  allAcheteurs: Acheteur[];
  statusCode: number;
  requestProcessing = false;
  acheteurIdToUpdate = null;
  processValidation = false;

  constructor(private acheteurService: AcheteurService) { }

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
}

//Delete acheteur
deleteAcheteur(acheteurId: string) {
this.preProcessConfigurations();
this.acheteurService.deleteAcheteurById(acheteurId)
    .subscribe(successCode => {
              this.statusCode = successCode;
              this.getAllAcheteurs();	
          },
          errorCode => this.statusCode = errorCode);    
}
//Perform preliminary processing configurations
preProcessConfigurations() {
this.statusCode = null;
this.requestProcessing = true;   
}
}

