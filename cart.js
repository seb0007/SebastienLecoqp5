

// CREATION DE LA PAGE PANIER - FAIRE APPARAITRE TOUS LES TEDDY SELECTIONNES


let listTeddySelect = JSON.parse(localStorage.getItem("listTeddySelect"));

console.log(listTeddySelect);


const panierTeddy = document.getElementById('teddy_basket');



const options = {
  method: 'POST',
  headers: {
      'Content-Type' : 'application/json' 
  },
  body: JSON.stringify()  
};
console.log(options);


///////Création d'un tableau de stockage des prix
let prixPanier = [];

//////Création du tableau qui va être envoyé au serveur avec les id des nounours



let basket = JSON.parse(listTeddySelect);


    fetch('http://localhost:3000/api/teddies/order',options) 
      .then(function(response) {
        if (response.ok) {
          return response.json();  
        }
      })
    
      .then(function(nounours) {
        localStorage.setItem("OrderID", nounours.orderId);
        window.location = "confirmation_commande.html"
        console.log(nounours);
      })

      .catch(function(error) {
        console.log(error)

      });
      
     
    if(listTeddySelect == null){
      

  // Création d'une div pour montrer les éléments du panier 
      let mainDiv = document.createElement("section")
      panierTeddy.appendChild(mainDiv)

      let divText = document.createElement("div")
      divText.textContent = "Votre panier est vide!"; 
      mainDiv.appendChild(divText)

    }  else {
      // s'il y a quelque chose dans le panier : récupérer les informations

  

      for(let i=0; i < basket.length; i ++)
      {
       
      product.push(basket[i].productId);

      const div = document.getElementById('teddy_basket');

      const div2 = document.createElement('basketTeddy');
      div.appendChild(div2)

      let picture = document.createElement('img');
      picture.setAttribute("src",basket[i].productImage)
      picture.src = basket[i].productImage;
      formulaire.appendChild(picture);

      let nameTeddy = document.createElement('p');
      nameTeddy.textContent = basket.productName;
      formulaire.appendChild(nameTeddy);

      let prix = document.createElement('p');
      prix.textContent = basket[i].productPrice + "€";/* basket [i]???*/
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
     

 

    let buttonCommand = document.createElement('button');
    buttonCommand.textContent = "Valider commande";
    form.appendChild(buttonCommand);

   
  

    /*const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    
   /* buttonCommand.addEventListener("click", (e)=> {
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

    });*/

    

   /* function getFormValue() {
      // envoie des donnee dans le localStorage
      //////Création de l'objet contact contenant les données du formulaire qui va être envoyé au serveur
      const contact = {
        firstName: document.querySelector("#firstname").value,
        lastName: document.querySelector("#lastname").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
      
      };
      localStorage.setItem("contact", JSON.stringify(contact));
    
      const aEnvoyer = {
        basket,
        contact,
      };
    
      console.log(aEnvoyer);
    }
    getFormValue();
   
//-------------------------------------------recuperer les infos du LS pour qu'il reste dans les champs utilisateur ------------------

// recuperation de la key formulaireValues dans le LS

const dataLocalStorage = localStorage.getItem("contact");

// convertir la chaine de caractere en objet JS

const dataLocalStorageObject = JSON.parse(dataLocalStorage);

// rediriger les value du LS dans les champs du formulaire

document.querySelector("#firstname").value = dataLocalStorageObject.Nom;
document.querySelector("#lastname").value = dataLocalStorageObject.Prenom;
document.querySelector("#address").value = dataLocalStorageObject.Email;
document.querySelector("#city").value = dataLocalStorageObject.Adress;
document.querySelector("#email").value = dataLocalStorageObject.Ville;

/*
*/


