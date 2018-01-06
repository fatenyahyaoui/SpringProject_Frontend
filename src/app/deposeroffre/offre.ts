export class Offre {
    id_offre:Number;
	nom_produit:String;
	a_propos:String;
	categorie_p:String;
	image:any;
	date_pub:String;
	telephone:String;
	lieu_offre:String;
	prix:Number;
	setImage(Im:string)
	{
		this.image=Im;
	}
}
