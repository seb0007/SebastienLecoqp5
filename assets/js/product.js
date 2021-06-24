//Récupération id oursons

let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id)

const URL = "http://localhost:3000/api/teddies/" + id;
console.log(url)

fetch ('url')
  .then(response => response.json())
  .then(data => {


    const lookTeddy = document.getElementById('teddy_info')

    //Création div global

    const domAll = document.createElement('div');
    divAll.className = "teddy";
    lookTeddy.appendChild(divAll)

    //création div image de l'ourson

    const domImage = document.createElement('div');
    domImage.className = "teddy_image";
    divAll.appendChild(domImage)

    const domImageTeddy = document.createElement('img');
    domImageTeddy.className = "image";
    domImageTeddy.setAttribute("src",data.imageUrl);
    domImage.setAttribute("alt",data.name);
    domImage.appendChild(domImageTeddy)


    //création div informations global de l'ourson

    const domInfoTeddy = document.createElement('div');
    domInfoTeddy.className = "info_teddy",
    divAll.appendChild(domInfoTeddy)

    const domName = document.createElement('h2'); 
    domName.className = "teddy_name";
    domName.textContent =data.name;
    domInfoTeddy.appendChild(domName)

    const domDescription = document.createElement('p');
    domDescription.className = "description";
    domDescription.textContent = data.description;
    domInfoTeddy.appendChild(domDescription)

    const domPrice = document.createElement('h3');
    domPrice.className = "teddy_price";
    domPrice.textContent = data.price / 100 + " €"
    domInfoTeddy.appendChild(domPrice)

    //Création choix de couleur

    const domColorTeddy = document.createElement('form');
    domInfoTeddy.appendChild(domColorTeddy)

    const domColor = document.createElement('div');
    domColor.className = "teddy_color";
    domColorTeddy.appendChild(domColor)

    //Sélection choix des couleurs

    const domChoose = document.createElement('')


    //Création sélecteur du choix des couleurs

    const domSelect = document.createElement('select');
    domSelect.className = "color_select";
    domColorTeddy.appendChild(domSelect)

//Affichage des couleurs
//Creation menu déroulant couleurs
//Création boucle

const color = data.colors;

for(let i=0; i < colors.length; i++) { 
let colorChoise = document.createElement('option');
colorChoise.textContent = "";
colorChoise.setAttribute = ();
domSelect.appendChild(colorChoise)
}


 //Création bouton pour ajouter le produit au panier

 const domButton = document.createElement('button');
 domButton.className = "btn";
 domButton.textContent = "Acheter le produit";
 domColorTeddy.appendChild(domButton)


 //création event sur mon bouton

 domButton.addEventListener('click', function(event){
  // si l'event n'est pas traité, l'event continue à se propager
event.preventDefault();
})

  // message pour indiquer à l'utilisateur l'ajout de son produit dans le panier

  function Message() {
    document.getElementById("validate__msg").innerHTML = "";

  let validationMessage = document.getElementById("validate__msg");
  validationMessage.textContent = ("Le produit a été ajouté au panier");
  
  }})
   

    /*
       Pour ajouter l'élément cliqué par l'utilisateur dans le panier : 
       utiliser querySelectorAll 
       ensuite utiliser addEventListerner("click") puisque c'est lorsque l'utilisateur va cliquer sur le teddy que le choix va se faire
      
       panier localStorage? if/else,     push?*/

       

  .catch(error)