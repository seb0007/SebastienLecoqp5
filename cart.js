

// CREATION DE LA PAGE PANIER - FAIRE APPARAITRE TOUS LES TEDDY SELECTIONNES
const panierTeddy = document.getElementById('teddy_basket');

let listTeddySelect = JSON.parse(localStorage.getItem("listTeddySelect"));

  console.log(listTeddySelect);
  


function displayCart()
{
  let article = document.createElement('article');
  panierTeddy.appendChild(article);

  if (listTeddySelect == null) {

    let div = document.createElement('div');
    div.textContent = "Votre panier est vide";
    article.appendChild(div);
}}

displayCart();










  


    //Defining the variables
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
           /* .then(() => (window.location = 'confirmation.html'))*/
            .catch((error) => {
                console.log('Erreur de connexion au serveur', error);
            });
        }
    });

 
