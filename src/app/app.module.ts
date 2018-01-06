import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {routes} from './app.router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BsModalModule } from 'ng2-bs3-modal';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AcheteurService } from './signup/acheteur.service';
import { EntrepriseService } from './signupvendeur/entreprise.service';
import { OffreService } from './deposeroffre/offre.service';


import { OffresauvgarderService} from './Monpanier/offresauvgarder.service';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { HomeModule } from './home/home.module';
import { TestComponent } from './test/test.component';
import { SigninComponent } from './signin/signin.component';

import { RechercheavanceeComponent } from './rechercheavancee/rechercheavancee.component';


import { ProfilentrepriseComponent } from './profilentreprise/profilentreprise.component';
import { RechercheparcategorieComponent } from './rechercheparcategorie/rechercheparcategorie.component';
import { RechercheparcategorieService } from './rechercheparcategorie/rechercheparcategorie.service';
import { RechercheparvilleComponent } from './rechercheparville/rechercheparville.component';
import { RechercheparentrepriseComponent } from './rechercheparentreprise/rechercheparentreprise.component';
import { TouteslesoffresComponent } from './touteslesoffres/touteslesoffres.component';
import { TouteslesoffresService } from './touteslesoffres/touteslesoffres.service';
import { StrategierechercheComponent } from './strategierecherche/strategierecherche.component';
import { MonpanierComponent } from './Monpanier/Monpanier.component';

import { AdminComponent } from './admin/admin.component';
import { ListeAcheteurComponent } from './liste-acheteur/liste-acheteur.component';
import { ListeVendeurComponent } from './liste-vendeur/liste-vendeur.component';
import { SigninvendeurComponent } from './signinvendeur/signinvendeur.component';
import { SignupvendeurComponent } from './signupvendeur/signupvendeur.component';



import { ProfilvendeurComponent } from './profilvendeur/profilvendeur.component';
import { DeposeroffreComponent } from './deposeroffre/deposeroffre.component';
import { ListeoffreComponent } from './listeoffre/listeoffre.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { NavvendeurComponent } from './navvendeur/navvendeur.component';

import { FormWizardModule } from 'angular2-wizard';
import { IndexacheteurComponent } from './indexacheteur/indexacheteur.component';
import { VilleindexComponent } from './villeindex/villeindex.component';
import { EntrepriseindexComponent } from './entrepriseindex/entrepriseindex.component';

import { ListoffresauvgarderComponent } from './listoffresauvgarder/listoffresauvgarder.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    TestComponent,
    SigninComponent,
   
    RechercheavanceeComponent,

   
    ProfilentrepriseComponent,
    RechercheparcategorieComponent,
    RechercheparvilleComponent,
    RechercheparentrepriseComponent,
    TouteslesoffresComponent,
  
    StrategierechercheComponent,
    MonpanierComponent,
   
    AdminComponent,
    ListeAcheteurComponent,
    ListeVendeurComponent,
    SigninvendeurComponent,
    SignupvendeurComponent,
 

    ProfilvendeurComponent,
    DeposeroffreComponent,
    ListeoffreComponent,
    NavadminComponent,
    NavvendeurComponent,
    IndexacheteurComponent,
    VilleindexComponent,
    EntrepriseindexComponent,
   
    ListoffresauvgarderComponent,
  ],
  imports: [
    BrowserModule,
    FormWizardModule,
    BsModalModule,
    Ng2SearchPipeModule, 
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpModule,
    routes,
		ReactiveFormsModule,
    HomeModule
    
  ],
  providers: [
    AcheteurService, EntrepriseService, OffreService, OffresauvgarderService,RechercheparcategorieService,TouteslesoffresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
