let div1 = document.querySelector('div');

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

//l'image
let img = document.createElement('img');
img.src = voiture.imgUrl;
img.style.float = "right";
img.style.width = "60%";
img.style.height = "60%";
document.body.appendChild(img);

// la description de la voiture
let div2 = document.createElement('div');
div2.innerHTML = "Citroen " + voiture.nom + "<br>";
div2.style.fontWeight = "bold";
div2.style.backgroundColor = "golden yellow";
div2.style.height = "10%";
div2.style.width = "10%";
div2.style.borderRadius = "10px";
div1.append(div2);

let description = document.createElement('div');
description.innerHTML = "DESCRIPTION:<br>"+ "Roues:" +" " + voiture.nombresRoues+ "<br>" ;
description.style.float = "left";
description.style.backgroundColor = "light brown";
description.style.height = "10%";
description.style.width = "10%";
description.style.borderRadius = "10px";
div2.appendChild(description);

let suiteDescrption = document.createElement('span');
suiteDescrption.innerHTML = "Couleur: " + voiture.Couleur + "<br>" ;
suiteDescrption.style.backgroundColor = "light brown";
suiteDescrption.style.height = "10%";
suiteDescrption.style.width = "10%";
suiteDescrption.style.borderRadius = "10px";
description.appendChild(suiteDescrption);

let span1 = document.createElement("span");
span1.innerHTML = "Constructeur: " + voiture.Contructeur + "<br>";
span1.style.backgroundColor = "light brown";
span1.style.height = "10%";
span1.style.width = "10%";
span1.style.borderRadius = "10px";
description.appendChild(span1);

let span2 = document.createElement('span');
span2.innerHTML =  "Type de carburant: " + voiture.Carburant + "<br>";
span2.style.backgroundColor = "light brown";
span2.style.height = "10%";
span2.style.width = "10%";
span2.style.borderRadius = "10px";
description.appendChild(span2);

let span3 = document.createElement('span');
span3.innerHTML = "Portes: " + voiture.nombrePortes + "<br>";
span3.style.backgroundColor = "light brown";
span3.style.height = "10%";
span3.style.width = "10%";
span3.style.borderRadius = "10px";
description.appendChild(span3);

let span4 = document.createElement('span');
span4.innerHTML = "Vitesse max: "  + voiture.vitesseMaxi;
span4.style.backgroundColor = "light brown";
span4.style.height = "10%";
span4.style.width = "10%";
span4.style.borderRadius = "10px";
description.appendChild(span4);