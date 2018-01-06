import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Expansion } from '@angular/compiler';
import {Routes,RouterModule, Router} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { TestComponent } from './test/test.component';
import { SigninComponent } from './signin/signin.component';

import { RechercheavanceeComponent } from './rechercheavancee/rechercheavancee.component';


import { ProfilentrepriseComponent } from './profilentreprise/profilentreprise.component';
import { RechercheparcategorieComponent } from './rechercheparcategorie/rechercheparcategorie.component';
import { RechercheparvilleComponent } from './rechercheparville/rechercheparville.component';
import { RechercheparentrepriseComponent } from './rechercheparentreprise/rechercheparentreprise.component';
import { TouteslesoffresComponent } from './touteslesoffres/touteslesoffres.component';

import { StrategierechercheComponent } from './strategierecherche/strategierecherche.component';
import { MonpanierComponent } from './Monpanier/Monpanier.component';
import { AdminComponent } from './admin/admin.component';
import { ListeAcheteurComponent } from './liste-acheteur/liste-acheteur.component';
import { ListeVendeurComponent } from './liste-vendeur/liste-vendeur.component';
import { SigninvendeurComponent } from './signinvendeur/signinvendeur.component';
import { SignupvendeurComponent } from './signupvendeur/signupvendeur.component';



import { DeposeroffreComponent } from './deposeroffre/deposeroffre.component';
import { ProfilvendeurComponent } from './profilvendeur/profilvendeur.component';
import { ListeoffreComponent } from './listeoffre/listeoffre.component';

import { IndexacheteurComponent } from './indexacheteur/indexacheteur.component';
import { VilleindexComponent } from './villeindex/villeindex.component';
import { EntrepriseindexComponent } from './entrepriseindex/entrepriseindex.component';
import { ListoffresauvgarderComponent } from './listoffresauvgarder/listoffresauvgarder.component';




export const router :Routes = [
    { path: 'home',     component: HomeComponent },
    { path: 'entrepriseindex',     component: EntrepriseindexComponent },
    { path: 'VilleindexComponent',     component: VilleindexComponent },
    { path: 'profile',     component: ProfileComponent },
   
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'test',      component: TestComponent },
    { path: 'signin',      component: SigninComponent },

    { path: 'rechercheavancee',      component: RechercheavanceeComponent },
  
    
    { path: 'profilentreprise/:id/:desc',component: ProfilentrepriseComponent },
    { path: 'rechercheparcategorie',      component: RechercheparcategorieComponent },
    { path: 'rechercheparville',      component: RechercheparvilleComponent },
    { path: 'rechercheparentreprise',      component: RechercheparentrepriseComponent },
    { path: 'touteslesoffres',      component: TouteslesoffresComponent },
  
    { path: 'strategierecherche',      component: StrategierechercheComponent },
    { path: 'Monpanier/:categorie_p/:lieuOffre/:aPropos/:telephone/:prix/:date/:nom_produit/:id_o/:image',component: MonpanierComponent },
    { path: 'admin',component: AdminComponent },
    { path: 'liste-acheteur',      component: ListeAcheteurComponent },
    { path: 'liste-vendeur',      component: ListeVendeurComponent },
    { path: 'signinvendeur',      component: SigninvendeurComponent },
    { path: 'signupvendeur',      component: SignupvendeurComponent },
 
   
  
    { path: 'deposeroffre/:var',      component: DeposeroffreComponent },
    { path: 'profilvendeur',      component: ProfilvendeurComponent },
    { path: 'listeoffre',      component: ListeoffreComponent },
    { path: 'indexacheteur',      component: IndexacheteurComponent },
    { path: 'listoffresauvgarder',      component: ListoffresauvgarderComponent },
    

    { path: '', redirectTo: 'landing', pathMatch: 'full' }

];

  
  export const routes :ModuleWithProviders = RouterModule.forRoot(router);
