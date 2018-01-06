import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ProfileentrepriseService}from './profileentreprise.service'
@Component({
  selector: 'app-profilentreprise',
  templateUrl: './profilentreprise.component.html',
  styleUrls: ['./profilentreprise.component.css'],
  providers:[ProfileentrepriseService]
})
export class ProfilentrepriseComponent implements OnInit {
  l:any;
  items:any;
  description:any;
  constructor(private Service:ProfileentrepriseService,private route: ActivatedRoute) {
    console.log(this.route.snapshot.params.id);
 }
  ngOnInit() {
   this.description=this.route.snapshot.params.desc;
    this.Service.getAllArticles(this.route.snapshot.params.id).subscribe(
      data =>{this.items = data},
      err => {console.log(err)},
      () => {console.log(this.items)}
    ) ;    
  }

}
