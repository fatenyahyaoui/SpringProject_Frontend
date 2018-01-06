
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild ,Directive } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Http} from '@angular/http';
import { OffresauvgarderService } from './offresauvgarder.service';
import { Offresauvgarder } from './Offresauvgarder';

@Component({
  selector: 'app-Monpanier',
  templateUrl: './Monpanier.component.html',
  styleUrls: ['./Monpanier.component.css']
})
export class MonpanierComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  private offresauvgarder:Offresauvgarder;
  files: FileList;
  public l1: String;
  public al: String = 'right';
  public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];
  private user:any;

  categorie_p:any;
  lieuOffre:any;
  aPropos:any;
  telephone:any;
  prix:any;
  date:any;
  nom_produit:any;
  id_o:any;
  image:any;
  

  allOffresauvgarders: Offresauvgarder[];
  statusCode: number;
  requestProcessing = false;
  offresauvgarderIdToUpdate = null;
  processValidation = false;
 
  constructor(private offresauvgarderService: OffresauvgarderService,private route:ActivatedRoute, private http: Http) {
 }

 ngOnInit(): void {
  this.categorie_p=this.route.snapshot.params.categorie_p;
  this.lieuOffre=this.route.snapshot.params.lieuOffre;
  this.aPropos=this.route.snapshot.params.aPropos;
  this.telephone=this.route.snapshot.params.telephone;
  this.prix=this.route.snapshot.params.prix;
  this.date=this.route.snapshot.params.date;
  this.nom_produit=this.route.snapshot.params.nom_produit;
  this.id_o=this.route.snapshot.params.id_o;
  this.image=this.route.snapshot.params.image;
  

  this.user=JSON.parse(localStorage.getItem("userC"));
  this.getAllOffresauvgarders();
}   
//Fetch all ex
getAllOffresauvgarders() {
   this.offresauvgarderService.getAllOffresauvgarders(this.user.acheteurId)
     .subscribe(
           data => this.allOffresauvgarders = data,
           errorCode =>  this.statusCode = errorCode);   
}





 //Inscription message
 CreateOffresauvgarder()
 {
  
  let offresauvgarder= new Offresauvgarder (null,null ,null) ;	  
   this.offresauvgarderService.createOffresauvgarder(offresauvgarder,this.user.acheteurId,this.id_o)
   
  
     .subscribe(successCode => {
               this.statusCode = successCode;
               this.getAllOffresauvgarders();	
               
           },
           errorCode => this.statusCode = errorCode);





 


 


}







//Delete ex
deleteOffresauvgarder(offresauvgarderId: string) {
  this.preProcessConfigurations();
  this.offresauvgarderService.deleteOffresauvgarderById(offresauvgarderId)
      .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllOffresauvgarders();	
            },
            errorCode => this.statusCode = errorCode);    
  }


//Perform preliminary processing configurations
preProcessConfigurations() {
this.statusCode = null;
this.requestProcessing = true;   
}








}
