
/*const prixTotal = localStorage.getItem("prixTotal", JSON.stringify(prixTotal));*/


function displayOrder() {
    const listTeddySelect = JSON.parse(localStorage.getItem('cart'));
    console.log(listTeddySelect);

    // Creating the order summary
    document.querySelector('#teddy_confirmation').innerHTML = `
    <h2 class="h4 text-center">Merci pour votre commande ! Voici le récapitulatif : </h2>
        <br/>
        <br/>
    <h3 class="text-center h5"><strong>Numéro de commande :</strong> ${localStorage.getItem(
        'orderId')}</h3>
        <br/>
        <br/>
    <div class="row content">
    </div>     
    <p class="text-center mt-1">Montant total de votre commande : <strong> ${localStorage.getItem(
        'prixTotal')},00 &euro; </strong></p>`;
       

    // Looping on products to create each product a card to be displayed
    const content = document.querySelector('.content');
    for (let elem of listTeddySelect) {
        content.innerHTML += `
        <div class="card col col-md-4">
            <img
                class="card-img-top py-1"
                src="${elem.productImage}"
                alt="Oh le joli nounours !"
            />
            <div class="card-body teddyInfos text-dark">
                <h5 class="card-title name">${elem.productName}</h5>
                <p class="color">${elem.productColors}</p>
                <p class="price text-decoration-none">${elem.productPrice}.00 &euro;</p>
                <p class="quantity">Quantité: ${elem.productQuantity}</p>
            </div>
        </div>`;
    }
   /* localStorage.clear(); // Data from localStorage is cleared, as it's not further needed*/
}


displayOrder();