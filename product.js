let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id)

let url = "http://localhost:3000/api/teddies/" + id;
console.log(url)

fetch ('url')
  .then(response => response.json())
  .then(nounours => {

    const lookTeddy = document.getElementById('teddy_info')

    //Création div global

    const domAll = document.createElement('article');
    divAll.className = "teddy";
    lookTeddy.appendChild(divAll)

    //création div image de l'ourson

    const domImage = document.createElement('div');
    divAll.appendChild(domImage)

    const domImageTeddy = document.createElement('figure');
    displayPictures.src = elem.imageUrl;
    domImage.appendChild(domImageTeddy)


    //création div informations global de l'ourson

    const domInfoTeddy = document.createElement('div');
    domInfoTeddy.className = "info_teddy",
    divAll.appendChild(domInfoTeddy)

    const domName = document.createElement('h2'); 
    domName.textContent = elem.name;
    domInfoTeddy.appendChild(domName)

    const domDescription = document.createElement('p');
    domDescription.textContent = elem.description;
    domInfoTeddy.appendChild(domDescription)

    const domPrice = document.createElement('h3');
    domPrice.textContent = elem.price / 100 + " €"
    domInfoTeddy.appendChild(domPrice)


  })