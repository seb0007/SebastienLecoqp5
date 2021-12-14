//Récupère Id de l'ourson sélectionné

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

console.log(id);



let url = 'http://localhost:3000/api/teddies/' + id;


const lookTeddy = document.getElementById('teddy_info');




async function fillProducts() {
  await fetch(url)
    .then((response) => response.json()) 
    .then((nounours) => afficherProduidsNounours(nounours)) 
    .catch((error) => {
      console.log('Erreur de connexion au serveur', error);
  });
} 


fillProducts()




function afficherProduidsNounours(nounours)
{
 

    let section = document.createElement('section');
    lookTeddy.appendChild(section);

  

     //Afficher info global sur le produit


     let displayInfo = document.createElement('article');
     section.appendChild(displayInfo);
     


     let divInfo = document.createElement('div');
     displayInfo.appendChild(divInfo);
     
     let displayPictures = document.createElement('img');
     displayPictures.src = nounours.imageUrl;
     divInfo.appendChild(displayPictures);


     let displayName = document.createElement('h2');
     displayName.textContent = nounours.name;
     divInfo.appendChild(displayName);

     let displayDescription = document.createElement('p');
     displayDescription.textContent = nounours.description;
     divInfo.appendChild(displayDescription);

     let displayPrice = document.createElement('h3');
     displayPrice.textContent = nounours.price/100 + " € ";
     divInfo.appendChild(displayPrice);
    
   
 
   //Afficher quantité produit
   

     const produitQuantite = ` 
     
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
    ` ;

     console.log(produitQuantite);

     
     const positionQuantite = document.querySelector("#quantite_produit");
     positionQuantite.innerHTML = produitQuantite;
     console.log(positionQuantite);

        


     let div2 = document.createElement('div2');
     displayInfo.appendChild(div2);     

     //Création d'un label pour indiquer le choix de couleur de l'ourson

     let label = document.createElement('label');
     label.textContent = "Choississez la couleur : ";
     div2.appendChild(label);
 

     
     // Création d'un selecteur pour choisir la couleur de l'ourson

     let displayColors = document.createElement('select');
     div2.appendChild(displayColors);

     //Affichage des couleurs
    
    
     const couleur = nounours.colors;

     for(let i = 0; i < couleur.length; i++){
     let colors = document.createElement('option');
     colors.textContent = nounours.colors[i];
     displayColors.appendChild(colors);
    
     }

     console.log(nounours.colors);

     //ajout produit dans panier
    
     let displayButton = document.createElement("div3");
     displayInfo.appendChild(displayButton);

     let button = document.createElement('bnt');
     button.textContent = "Ajouter au panier";
     displayButton.appendChild(button);

    
  
     //Event click

    

     button.addEventListener("click", function(event){
     event.preventDefault()
     
   
     const choixQuantite = positionQuantite.value;
     console.log(choixQuantite);

     let teddySelect = {
      productName : nounours.name,
      productId : nounours._id,
      productColors : nounours.colors,
      productImage : nounours.imageUrl,
      productPrice : (nounours.price * choixQuantite/100),
      productQuantity : choixQuantite,

    };

    console.log(teddySelect);


    //AJOUT DES ARTICLES DANS LE PANIER //
    let listTeddySelect = JSON.parse(localStorage.getItem("cart"));
    
    
   const ajoutPanier = () => { 
    listTeddySelect.push(teddySelect)
    localStorage.setItem("cart",JSON.stringify(listTeddySelect));
    /*window.location.href ="cart.html"*/
   };   

  

    if(listTeddySelect)
    {
     
     ajoutPanier();
     alert("Cet article a été ajouté dans votre panier");
     console.log(listTeddySelect);
    
    }

 
     else{
       listTeddySelect = [];
       ajoutPanier();
       alert("Cet article a été ajouté dans votre panier");
       console.log(listTeddySelect);
     }
     

     });


    }

   
    

 
    
 