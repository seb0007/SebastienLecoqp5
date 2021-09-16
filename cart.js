/*//////////////////////////////DECLARATION DES VARIABLES NECESSAIRES///////////////////////////////////////////

///////Création d'un tableau de stockage des prix
const arrayPrice = [];
//////Création du tableau qui va être envoyé au serveur avec les id des caméras
let products = [];
//////Création de l'objet contact contenant les données du formulaire qui va être envoyé au serveur
let contact = {};*/ 

// CREATION DE LA PAGE PANIER - FAIRE APPARAITRE TOUS LES TEDDY SELECTIONNES

let listTeddySelect = JSON.parse(localStorage.getItem("listTteddySelect"));
console.log(listTeddySelect);


const panierTeddy = document.getElementById('teddy_basket');






/*const contact = {
  firstName: document.querySelector("#firstname").value,
  lastName: document.querySelector("#lastname").value,
  address: document.querySelector("#address").value,
  city: document.querySelector("#city").value,
  email: document.querySelector("#email").value
};

const options = {
  method: 'POST',
  headers: {
      'Content-Type' : 'application/json' 
  },
  body: JSON.stringify({
    contact, 
    product
  })
};*/


async function fillProducts() {
    await fetch('http://localhost:3000/api/teddies/order') 
      .then((response) => response.json()) 
      .then((nounours) => remplirListePanier(nounours)) 
      
      
  }
  
  fillProducts() 

  function remplirListePanier(nounours)
  {

    
     
    if(listTeddySelect == null){
      let main = document.getElementById("teddy_basket");

  // Création d'une div pour montrer les éléments du panier 
      let mainDiv = document.createElement("section")
      main.appendChild(mainDiv)

      let divText = document.createElement("div")
      divText.textContent = "Votre panier est vide!"; 
      mainDiv.appendChild(divText)

    } else {
      // s'il y a quelque chose dans le panier : récupérer les informations
      let basket = JSON.parse(listTeddySelected);

      let totalAccount = 0
      let products = []

      for(let i=0; i < basket.length; i ++)
      {
        products.push(basket[i].productId)
      }

    }



    
     let formulaire = document.createElement('article');
     panierTeddy.appendChild(formulaire);

   

     //Création formulaire

     let form = document.createElement('form');
     formulaire.appendChild(form);

     let firstName = document.createElement('div');
     firstName.textContent = "Votre prénom : " ;
     form.appendChild(firstName);

     let userName = document.createElement('input');
     form.appendChild(userName);
     

     let secondName = document.createElement('div1');
     secondName.textContent = "Votre nom : ";
     form.appendChild(secondName);

     let userName1 = document.createElement('input');
     form.appendChild(userName1);

    
     

  }