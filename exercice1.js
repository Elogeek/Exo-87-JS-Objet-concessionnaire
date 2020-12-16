let paragraphe = document.querySelector('p');

let voiture = {
    nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Contructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie: "450km",
    vitesseMaxi : "120km/h",

};

paragraphe.innerHTML = voiture.imgUrl;
paragraphe.style.flex = "column";
paragraphe.style.width = 100 + "px";
paragraphe.style.height = 100 + "px";

let paragraphe2 = document.createElement('p');
paragraphe2.innerHTML = voiture.nom ;
paragraphe2.style.fontWeight = "bold";
paragraphe.append(paragraphe2);

let description = document.createElement('div');
description.innerHTML = "DESCRIPTION:<br>"+ "Roues:" +" " + voiture.nombresRoues+ "<br>" ;
paragraphe.appendChild(description);

let descptionSuite = document.createElement('span');
descptionSuite.innerHTML = "Couleur:" +" "  + voiture.Couleur+ "<br>" ;
description.appendChild(descptionSuite);

let span1 = document.createElement("span");
span1.innerHTML = "Constructeur:" +" "  + voiture.Contructeur + "<br>" ;
description.appendChild(span1);

let span2 = document.createElement('span');
span2.innerHTML =  "Type de carburant:" +" " + voiture.Carburant + "<br>";
description.appendChild(span2);

let span3 = document.createElement('span');
span3.innerHTML = "Portes:" +" " + voiture.nombrePortes + "<br>";
description.appendChild(span3);

let span4 = document.createElement('span');
span4.innerHTML = "Vitesse max:" +" "  + voiture.vitesseMaxi;
description.appendChild(span4);