const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')

console.log(id);



let url = 'http://localhost:3000/api/teddies/' + id;


const lookTeddy = document.getElementById('teddy_info');



async function fillProducts() {
  await fetch(url)
    .then((response) => response.json()) 
    .then((nounours) => afficherProduidsNounours(nounours)) 
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

     let displayPrice = document.createElement('h3');
     displayPrice.textContent = nounours.price/100 + " € ";
     divInfo.appendChild(displayPrice);
    
     let displayDescription = document.createElement('p');
     displayDescription.textContent = nounours.description;
     divInfo.appendChild(displayDescription);


     //Afficher 

     let form = document.createElement('form');
     divInfo.appendChild(form);

     let div = document.createElement('div');
     displayInfo.appendChild(div);

     let label = document.createElement('label');
     label.textContent = "choississez la couleur : "
     div.appendChild(label);
     

     let displayColors = document.createElement('select');
     div.appendChild(displayColors);

     //Affichage des couleurs
    
    
const couleur = nounours.colors;
     for(let i = 0; i < couleur.length; i++){
     let colors = document.createElement('option');
     colors.textContent = nounours.colors[i];
     displayColors.appendChild(colors);
    
     }
     console.log(nounours.colors);
    
     let displayButton = document.createElement("div3");
     displayInfo.appendChild(displayButton);

     let button = document.createElement('bnt');
     button.textContent = "Ajouter au panier";
     displayButton.appendChild(button);

     //Event click

     button.addEventListener("click", function(event){
     event.preventDefault()
     });
    
     

     //ajout produit dans panier

  
}




     //mettre produit dans le panier
/*
     let basket
     let listTeddySelected = localStorage.getItem("listTeddySelected");
     if/else????*/