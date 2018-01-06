import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild ,Directive } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Http} from '@angular/http';
import { OffresauvgarderService } from '../Monpanier/offresauvgarder.service';
import { Offresauvgarder } from '../Monpanier/Offresauvgarder';

@Component({
  selector: 'app-listoffresauvgarder',
  templateUrl: './listoffresauvgarder.component.html',
  styleUrls: ['./listoffresauvgarder.component.css']
})
export class ListoffresauvgarderComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  private offresauvgarder:Offresauvgarder;
  files: FileList;
  public l1: String;
  public al: String = 'right';
  public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];
  private user:any;

 
  

  allOffresauvgarders: Offresauvgarder[];
  statusCode: number;
  requestProcessing = false;
  offresauvgarderIdToUpdate = null;
  processValidation = false;
 
  constructor(private offresauvgarderService: OffresauvgarderService,private route:ActivatedRoute, private http: Http) {
 }

 ngOnInit(): void {
  

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
