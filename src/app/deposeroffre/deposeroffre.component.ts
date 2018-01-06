import {ChangeDetectorRef, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Offre} from './offre';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {OffreService} from './offre.service';
@Component({
  selector: 'app-deposeroffre',
  templateUrl: './deposeroffre.component.html',
  styleUrls: ['./deposeroffre.component.css'],
 
})
export class DeposeroffreComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  files: FileList;
  public l1: String;
 private ch : any;
 private image : any;
  public al: String = 'right';
  public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];

  model = {
    left: true,
    middle: false,
    right: false
};
  private offre:Offre;
  private user:any;
private idd:any;
private tagme:any;
 public imageo:any;

private testInterface:any;
  constructor(private _offreService:OffreService, private changeDetectorRef: ChangeDetectorRef, private _router:Router, private http: Http) { }
  
    ngOnInit() {
      this.offre=this._offreService.getter();
      this.tagme=this._offreService.isUpdateGet();
      console.log("tagMe2  "+this.tagme);
      this.user = JSON.parse(localStorage.getItem("user"));
    }
    fileChanged(e: Event){
     
      const fi =  this.fileInput.nativeElement;
      const fileToUpload = fi.files[0];
      console.log(fileToUpload);
      this.http.put(`https://angular2.apispark.net/v1/files/${fileToUpload.name}`,
      fileToUpload).subscribe(res => {
      console.log(res);
           });
          this.ch=`https://angular2.apispark.net/v1/files/${fileToUpload.name}`;
         
          
         
   
     }
  
    processForm(nom:any,categorie:any,telephone:any,prix:any,lieu:any,date:any,apropos:any){
   if (this.tagme=="cr"){
     this.image=this.ch;

      this._offreService.SendIdEntr(nom.value,categorie.value,telephone.value,prix.value,lieu.value,date.value,apropos.value,this.user.id_etr,this.image).subscribe((offre)=>{
        this._router.navigate(['/listeoffre']);
      },(error)=>{
        console.log(error);
      });
    }else{
      console.log(" update");
      this._offreService.updateOffre(this.offre).subscribe((offre)=>{
        this._router.navigate(['/listeoffre']);
      },(error)=>{
        console.log(error);
      });
    }}
    
  
  }
  