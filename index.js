
//Récupérer les données

async function displayteddy(){ 
fetch('http://localhost:3000/api/teddies')
  .then(response => response.json())
  .then((nounours) => {
   for(let elem of nounours)

   {
      let products = document.getElementById('content')
      let div = document.createElement('main');

      
      let newDiv = document.createElement("article");
      div.appendChild(newDiv)

      let div2 = document.createElement('figure');
      newDiv.appendChild(div2)

      let displayPictures = document.createElement('img');
      displayPictures.src = elem.imageUrl;
      newDiv.appendChild(displayPictures)

      let displayName = document.createElement('h2');
      displayName.textContent =  elem.name;     /* ou nounours[i].name; ???*/
      newDiv.appendChild(displayName)

      let displayPrice = document.createElement('h3');
      displayPrice.textContent = elem.price/100 + "€";
      newDiv.appendChild(displayPrice)

      const displayButton = document.createElement('button');
      domButton.textContent = "Voir produit";
      newDiv.appendChild(displayButton)

   }
   
   displayteddy()
   
   

})}
