

// CREATION DE LA PAGE PANIER - FAIRE APPARAITRE TOUS LES TEDDY SELECTIONNES
/*import { numberItemInTheBasket } from "./produitSelected.js";
console.log(numberItemInTheBasket);
*/

let listTeddySelect = JSON.parse(localStorage.getItem("listTeddySelect"));

console.log(listTeddySelect);


const panierTeddy = document.getElementById('teddy_basket');



const options = {
  method: 'POST',
  headers: {
      'Content-Type' : 'application/json' 
  },
  body: JSON.stringify(/*dataSend*/)  
};
console.log(options);




let productId = [];
let prixPanier = 0;

async function fillProducts() {
    await fetch('http://localhost:3000/api/teddies/order',options) 
      .then((response) => response.json()) 
      .then((nounours) => remplirListePanier(nounours)) 
      
     /* return response.json();?????*/
  }
  
  
  fillProducts() 

  function remplirListePanier(nounours)
  {

     
    if(listTeddySelect == null){
      

  // Création d'une div pour montrer les éléments du panier 
      let mainDiv = document.createElement("section")
      panierTeddy.appendChild(mainDiv)

      let divText = document.createElement("div")
      divText.textContent = "Votre panier est vide!"; 
      mainDiv.appendChild(divText)

    }  else {
      // s'il y a quelque chose dans le panier : récupérer les informations
      let basket = JSON.parse(listTeddySelect);
      
     

      for(let i=0; i < basket.length; i ++)
      {
        products.push(basket[i].productId);

        const div = getElementById('basket');

        const div2 = createElement('basketTeddy');
        div.appendChild(div2)

     let picture = document.createElement('img');
     picture.src = nounours[i].imageUrl;
     formulaire.appendChild(picture);

     let nameTeddy = document.createElement('p');
     nameTeddy.textContent = nounours.name;
     formulaire.appendChild(nameTeddy);

     let prix = document.createElement('p');
     prix.textContent = nounours[i].price + "€";/* basket [i]???*/
     formulaire.appendChild(prix);
      }

    }

      //Creéation bouton article supprimé 

    
     let formulaire = document.createElement('article');
     panierTeddy.appendChild(formulaire);


     let deleteTeddy = document.createElement("button");
     deleteTeddy.textContent = "Supprimer l'article";
     formulaire.appendChild(deleteTeddy);

      
     deleteTeddy.addEventListener("click", function(event){
     /*basket.splice(i,1)*/
     localStorage.setItem("listTeddySelect",JSON.stringify(basket))
        // après la suppression -> recharger la page
     document.location.reload()        
    })

    
    //Creéation bouton panier supprimé 


    let bntSup = document.createElement('button');
    bntSup.textContent = " Supprimer le panier ";
    formulaire.appendChild(bntSup);

    bntSup.addEventListener("click", function(event){
      console.log('vider le panier')
      localStorage.removeItem('listTeddySelect');
       // pour supprimer les éléments du panier et revenir à la page html vierge
        document.location.reload()
      });

     //Création formulaire

     let form = document.createElement('form');
     formulaire.appendChild(form);

     let inscription = document.createElement('h2');
     inscription.textContent = " Veuillez remplir le formulaire";
     form.appendChild(inscription);

     let firstName = document.createElement('label');
     firstName.textContent = " Votre prénom : " ;
     form.appendChild(firstName);

     let userName = document.createElement('input');
     form.appendChild(userName);
     

     let secondName = document.createElement('label');
     secondName.textContent = "Votre nom : ";
     form.appendChild(secondName);

     let userName1 = document.createElement('input');
     form.appendChild(userName1);

     let userCity = document.createElement('label');
     userCity.textContent = " Ville ";
     form.appendChild(userCity);

     
     let userCity1 = document.createElement('input');
     form.appendChild(userCity1);

     let userAdress = document.createElement('label');
     userAdress.textContent = " Votre adresse de livraison";
     form.appendChild(userAdress);

     let userAdress1 = document.createElement('input');
     form.appendChild(userAdress1);


     let userMail = document.createElement('label');
     userMail.textContent = " Adresse e-mail : ";
     form.appendChild(userMail);

     let userMail1 = document.createElement('input');
     form.appendChild(userMail1);
     

    //Calcul produi panier
    
    

    const totalAccount = document.createElement('p');
    totalAccount.textContent = "Montant total de votre commande : " + nounours.price/100 + "€";
    formulaire.appendChild(totalAccount);

    let buttonCommand = document.createElement('button');
    buttonCommand.textContent = "Valider commande";
    form.appendChild(buttonCommand);
  
    
    ButtonSendForm.addEventListener("click", (e)=> {
      e.preventDefault();

      let contact = {
        firstName : firstName.value,
        lastname : lastname.value,
        adress : adress.value,
        city : city.value,
        email : email.value,
      }
      
      
      let dataSend = {
        contact : contact,
        products : productId,
      }

    });


    }

       // envoie des donnee dans le localStorage
      /*  const contact = {
  firstName: document.querySelector("#firstname").value,
  lastName: document.querySelector("#lastname").value,
  address: document.querySelector("#address").value,
  city: document.querySelector("#city").value,
  email: document.querySelector("#email").value
};
console.log(contact);*/

//vérifier si les infos sont vraie

 /*.then(function(value) {
        localStorage.setItem("OrderID", value.orderId);
        localStorage.setItem("OrderPrice", totalAccount);
        window.location = "confirmation.html";
        console.log("Order ID : ", JSON.stringify(value.orderId));*/



