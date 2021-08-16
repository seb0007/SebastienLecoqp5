const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')

console.log('id');



let url = 'http://localhost:3000/api/teddies/' + id;


const lookTeddy = document.getElementById('teddy_info');



async function fillProducts() {
  await fetch('url')
    .then((response) => response.json()) 
    .then((nounours) => afficherProduidsNounours(nounours)) 
} 


fillProducts()
/*
function afficherProduidsNounours(nounours)
{
  for(let elem of nounours)
  {

    let section = document.createElement('section');
    lookTeddy.appendChild(section);

  

//Afficher info global sur le produit


     let displayInfo = document.createElement('article');
     section.appendChild(displayInfo);
     
     let displayPictures = document.createElement('img');
     displayPictures.src = elem.imageUrl;
     section.appendChild(displayPictures);


     let divInfo = document.createElement('div');
     displayInfo.appendChild(divInfo);
     


     let displayName = document.createElement('h2');
     displayName.textContent = elem.name;
     divInfo.appendChild(displayName);
    
     let displayDescription = document.createElement('p');
     displayDescription.textContent = elem.description;
     divInfo.appendChild(displayDescription);

     let displayPrice = document.createElement('h3');
     displayPrice.textContent = elem.price;
     divInfo.appendChild(displayPrice);

     //Afficher couleurs

     let displayColors = document.createElement('div1');
     divInfo.appendChild(displayColors);

     let colors = document.createElement('div2')
     colors.textContent = elem.colors;
     displayColors.appendChild(colors);

     let displayButton = document.createElement('bnt');
     displayButton.textContent = "Ajouter au panier";
     displayColors.appendChild(displayButton);
     

     /*addTeddy.addEventListener("click", function(event){
     event.preventDefault();*/

     //mettre produit dans le panier

     /*let basket
     let listTeddySelected = localStorage.getItem("listTeddySelected");
     if/else????*/
    
/*
  }
}*/



