import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("userC",null);
    localStorage.setItem("loginC",null);
    localStorage.setItem("authenticatedC",null);      
    localStorage.removeItem("authenticatedC");
    localStorage.removeItem("loginC");
    localStorage.removeItem("userC");
    localStorage.clear();
  }

}
