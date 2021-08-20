
//Récupérer les données

const myGallery = document.getElementById('content');
console.log(myGallery);

let section = document.createElement("section");
myGallery.appendChild(section);



async function fillProducts() {
  await fetch('http://localhost:3000/api/teddies') // will return info, but in wrong format
    .then((response) => response.json()) // will return info, in json format
    .then((nounours) => remplirListeProduits(nounours)) // main code here, using json info
    
    
}

fillProducts()


.catch(error => {
  document.getElementById('content').textContent='Erreur avec le serveur'
})


function remplirListeProduits(nounours) {
 
  for (let elem of nounours) {
    
   

    let article = document.createElement("article");
    section.appendChild(article);

    let displayPictures = document.createElement("img");
    displayPictures.src = elem.imageUrl;
    article.appendChild(displayPictures);


    let displayName = document.createElement("h3");
    displayName.textContent = elem.name;
    article.appendChild(displayName);

    let displayPrice = document.createElement("p");
    displayPrice.textContent = elem.price/100 + " €";
    article.appendChild(displayPrice);
    
    let lien = document.createElement("a");
    lien.setAttribute("href", "product.html?id=" + elem._id);
    article.appendChild(lien);
    console.log(nounours._id);

    let button = document.createElement("bnt");
    button.textContent = "Voir produit";
    lien.appendChild(button);
   
  }

}


  /*.catch(error => {
     document.getElementById('content').textContent='Erreur avec le serveur'
   })*/