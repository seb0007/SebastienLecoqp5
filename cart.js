// CREATION DE LA PAGE PANIER - FAIRE APPARAITRE TOUS LES TEDDY SELECTIONNES



  
let listTeddySelect = JSON.parse(localStorage.getItem("cart"));
console.log(listTeddySelect);


function displayCart()
{
    const displayCartTeddy = document.querySelector('#teddy_basket');
   
   

    if (!localStorage.getItem('cart')) {
        displayCartTeddy.textContent = 'Votre panier est vide';
      

} else { 
    
    for (let elem of listTeddySelect) {  /* number ?????*/
        displayCartTeddy.innerHTML+= `
  <div class="info_nounours">
  
  <img class="card-img-top img-fluid" src="${elem.productImage}"/>
  <div class="card_body_teddyInfos">
      <h2 class="name">${elem.productName}</h2>
      <p class="color">Couleur: ${elem.productColors}</p>
      <p class="quantity">Quantité: ${elem.productQuantity}</p> 
      <p class="price">Prix: ${elem.productPrice }.00 &euro;</p>     
                        
  </div>
                          
  </div>
  `;     
  
}       
    
}} 




displayCart();



function displayPrice(){

    
let totalAccount = [];

for(let i =0; i <listTeddySelect.length; i++){ 

    let prixPanier = listTeddySelect[i].productPrice;

totalAccount.push(prixPanier);


}

const reducer = (accumulateur, currentValue) => accumulateur + currentValue;

const prixTotal = totalAccount.reduce(reducer, 0);
console.log(prixTotal);

//code html



const affichagePrixHtml = `
<div class "affichage_prix_html">Le prix total est de : ${prixTotal}.00 &euro;</div>  `

const displayCartTeddy = document.querySelector('#teddy_basket');

displayCartTeddy.insertAdjacentHTML("beforeend", affichagePrixHtml);
}


displayPrice();



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

           /* localStorage.setItem("prixTotal", JSON.stringify(prixTotal));*/       // ??????????????
           
    
            //Creation objet contact
 
            const contact = {
                firstName: firstName,
                lastName: lastName,
                adress: adress,
                city: city,
                email: email,
             
            };

          
        const productIds = listTeddySelect.map(product => product.productId);
               
        // Creating the object which will be the body of the request
        let orderContent = {};
        orderContent = { contact, listTeddySelect: productIds };
          console.log(orderContent);
           
    
            // Méthode POST envoie du formulaire


            fetch('http://localhost:3000/api/teddies/order', {
            method: 'POST',
            body: JSON.stringify(orderContent),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((res) => localStorage.setItem('orderId', res.orderId))
       /* .then(() => (window.location = 'confirm.html'))
        .catch((error) => {
            console.log('Erreur de connexion au serveur', error);
        });*/
            
        }
    });