export class Acheteur {
    constructor(public acheteurId: string, public nom_acheteur: string, public prenom_acheteur: string, public adresse_acheteur: string, public code_postale: Number, public avatar: string, public tel_acheteur: Number, public mail: string, public password: string) { 
  }
  setAvatart(av:string)
  {
      this.avatar=av;
  }
}
