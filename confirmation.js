// Récupération Id de la commande (panier.js)
let orderId = localStorage.getItem('OrderID');
let value = localStorage.getItem('OrderPrice');


let confirmation = document.getElementById("teddy_confirmation");


function teddyConfirmation(){

let article = document.createElement("h2");
article.textContent = "Orinoco vous remercie pour votre commande." ;
confirmation.appendChild(article);

let divNumOrder = document.createElement('h3');
divNumOrder.textContent = "Votre numéro de commande : " + orderId;
confirmation.appendChild(divNumOrder);

let dispalyTotal = document.createElement("h4");
dispalyTotal.textContent = "Le montant total est de : "  + value + "€";
confirmation.appendChild(dispalyTotal);

let goodBye = document.createElement('p');
confirmation.appendChild(goodBye);
goodBye.textContent = "En espérant vous revoir bientôt chez Orinoco ! Toute l'équipe d'orinoco vous souhaite une belle journée. ";

// Effacer les données du local Storage 
localStorage.clear();

}
teddyConfirmation();