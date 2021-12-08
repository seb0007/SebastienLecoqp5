// CREATION DE LA PAGE PANIER - FAIRE APPARAITRE TOUS LES TEDDY SELECTIONNES



  
let listTeddySelect = JSON.parse(localStorage.getItem("cart"));
console.log(listTeddySelect);


function displayCart()
{
    const displayCartTeddy = document.querySelector('#teddy_basket');
   
   

    if (!localStorage.getItem('cart')) {
        displayCartTeddy.textContent = 'Votre panier est vide';
      

} else { 
    
    for (let elem of listTeddySelect) {  
        displayCartTeddy.innerHTML+= `
  <div class="info_nounours">
  
  <img class="card-img-top img-fluid" src="${elem.productImage}"/>
  <div class="card_body_teddyInfos">
      <h2 class="name">${elem.productName}</h2>
      <p class="color">Couleur: ${elem.productColors}</p>
      <p class="quantity">Quantité: ${elem.productQuantity}</p> 
      <p class="price">Prix: ${elem.productPrice}.00 &euro;</p>     
                        
  </div>
                          
  </div>
  `;     
  
}       
    
}} 




displayCart();

let totale = 0;


function displayTotal() {

    for( let elem of listTeddySelect){ 
        const displayCartTeddy = document.querySelector('#teddy_basket');
         displayCartTeddy.innerHTML+= `
         <div class = "cart_body">
         <p class = "montantTotal"> Montant : ${elem.producPrice * elem.productQuantity}.00 &euro; </p>
         </div>
         `;

     
   
}}

console.log(totale);

displayTotal();



/*let prixPanier = 0;

function priceTotalBasket(){ 
    
    prixPanier += listTeddySelect.productQuantity * listTeddySelect.productPrice / 100;
    //AFFICHE PRIX TOTAL DU PANIER // ENVOI AU LOCALSTORAGE
    let prixTotal = document.getElementById('prixTotal').textContent = prixPanier + " € ";
    localStorage.setItem('cart', JSON.stringify(prixTotal));
  }

  priceTotalBasket();*/



  

/*
function displayPrice(){


    const cartTeddy = document.getElementById("teddy_basket");
   
    let totalPrices= [];

    let total = document.createElement('div5');
    total.textContent = " Montant total : " + totalPrices + "€";
    cartTeddy.appendChild(total);


    if(listTeddySelect){
      for( let i =0; i< listTeddySelect; i++){
        totalPrices.push(listTeddySelect.productPrice)
    }
}}


displayPrice();
*/


function cartDelete(){
  
    const deleteCart = document.getElementById("delete");
    let i  = 0;
        deleteCart.addEventListener("click", function(e){
        listTeddySelect.splice(i,1)
        localStorage.setItem("cart",JSON.stringify(listTeddySelect))
        // après la suppression -> recharger la page
        document.location.reload()
    })


}
cartDelete();



function deleteAll(){

const deleteCartAll = document.getElementById('deleteAll');

deleteCartAll.addEventListener ("click", function(e){
    console.log("vider le panier");
    localStorage.removeItem('cart')
        // pour supprimer les éléments du panier et revenir à la page html vierge
        document.location.reload()

        alert(" Votre panier est vide!");
})


    

}
deleteAll();


  


    //Création formulaire


      myForm.addEventListener('submit', function(e) {
      e.preventDefault();
        //Defining the variables
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const adress = document.getElementById('adress').value;
        const city = document.getElementById('city').value;
        const email = document.getElementById('email').value;

        console.log(myForm);

         // Verify cart is not empty 
        
        if (                            
        !firstName.match(`^[a-zA-Z'-]+$`) ||                                // Verify first Name    
        !lastName.match(`^[a-zA-Z'-]+$`) ||                                 // Verify name
        adress === '' ||                                                   // Verify adress - REGEX are not efficient with addresses and city names, so they're not used here
        city === '' ||                                                      // Verify city     
        !email.match(`^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$`)){   // Verify mail
        document.getElementById('myForm')
        .insertAdjacentHTML(
               "afterend",
                "<p>Commande impossible, pensez à remplir tous les champs.</p>");
               
        } else {
    
            //Creation objet contact
 
            const contact = {
                firstName: firstName,
                lastName: lastName,
                adress: adress,
                city: city,
                email: email,
             
            };
           console.log(contact);
          
           
    
            // Méthode POST envoie du formulaire


            fetch('http://localhost:3000/api/teddies/order', {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => res.json())
            .then((res) => localStorage.setItem('orderId', res.orderId))
            .then(() => (window.location = 'confirmation.html'))
            .catch((error) => {
                console.log('Erreur de connexion au serveur', error);
            });
        }
    });