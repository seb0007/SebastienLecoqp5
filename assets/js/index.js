fetch('http://localhost:3000/api/teddies')
  .then(response => response.json())
  .then(data => {


// Stockage info API


const myGallery = document.getElementById('content')

let doma /*????*/
let domDiv
let domDiv2
let domName
let domDescription
let domPrice
let domImage
console.log(data)
for(let i=0; i < data.length; i++){ 

  /*doma = document.createElement('a');
  doma.setAttribute("href", "./pages/product.html?id", data[i]+_id);*/

  domDiv = document.createElement("article");
  domDiv.className = "class_teddy";
  myGallery.appendChild(domDiv)


  domDiv2 = document.createElement("div2");
  domDiv2.className = "class_list_produits";
  domDiv.appendChild(domDiv2)

  domImage = document.createElement("figure");
  domImage.className = "image_teddy";
  domImage.setAttribute("src",data[i].imageUrl);
  domImage.setAttribute("alt",data[i].name);
  domDiv2.appendChild(domImage)

  domName = document.createElement("h2");
  domName.className = "name_teddy";
  domName.textContent = data[i].name;
  domDiv2.appendChild(domName)
  console.log(data[i].name)

  domDescription = document.createElement('p');
  domDescription.className = "description";
  domDescription.textContent = data[i].description;
  domDiv2.appendChild(domDescription)

  domPrice = document.createElement("h3");
  domPrice.className = "price_teddy";
  domPrice.textContent = data[i].price / 100 + " €"
  domDiv2.appendChild(domPrice)

  myGallery.appendChild(doma)

}

  })


        .catch(error => alert( 
         /*  document.getElementById('content').textContent=*/'Erreur avec le serveur'
          ));
