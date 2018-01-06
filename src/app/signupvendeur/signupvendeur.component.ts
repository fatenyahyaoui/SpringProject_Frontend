import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Http} from '@angular/http';
import {Entreprise} from './entreprise';
import {Router} from '@angular/router';
import {EntrepriseService} from './entreprise.service';
@Component({
  selector: 'app-signupvendeur',
  templateUrl: './signupvendeur.component.html',
  styleUrls: ['./signupvendeur.component.css']
})
export class SignupvendeurComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  private entreprise:Entreprise;
  files: FileList;
  public l1: String;
  public al: String = 'right';
  public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];


  constructor(private _entrepriseService:EntrepriseService, private _router:Router, private changeDetectorRef: ChangeDetectorRef, private http: Http) { }

  ngOnInit() {
    this.entreprise=this._entrepriseService.getter();
  }


  fileChanged(e: Event){
   const fi =  this.fileInput.nativeElement;
   const fileToUpload = fi.files[0];
   this.http.put(`https://angular2.apispark.net/v1/files/${fileToUpload.name}`,
   fileToUpload).subscribe(res => {
   console.log(res);
        });
        this.entreprise.logo=`https://angular2.apispark.net/v1/files/${fileToUpload.name}`;

  }

  processForm(){
    this._entrepriseService.createEntreprise(this.entreprise).subscribe((entreprise)=>{
      console.log(entreprise);
      /*this._entrepriseService.uploadphoto(this.file)*/
      this._router.navigate(['/signinvendeur']);

    },(error)=>{
      console.log(error);
    });

  }
}
