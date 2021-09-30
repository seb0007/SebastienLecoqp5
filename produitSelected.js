/*function addBasket(){
    let listTeddySelect = getBasket();
    // j'ajoute un teddy dans mon panier via .push
    listTeddySelect.push("teddy_basket");
    // enregistre l'article qui vient d'etre ajouter et on lui passe le tableau d'article selectionné
    saveBasket(listTeddySelect);
  }

  addBasket();


 
  
  function getBasket(){
    let listTeddySelect = localStorage.getItem("listTeddySelect");
    // si listTeddySelect n'existe pas => null donc il faut retourner un tableau vide 
    if (listTeddySelect == null){
      return []
    } else 
    // si listTeddySelect existe alors je retourne un JSON.parse de la listTeddySelect      
     return JSON.parse(listTeddySelect);
  }
  getBasket();
        
  // serialisation des données       
  function saveBasket(listTeddySelect){
    localStorage.setItem("listTeddySelect",JSON.stringify(listTeddySelect))
  } 

  saveBasket(listTeddySelect);*/


  export const numberItemInTheBasket = () => {
    const notificationBasket = document.querySelector("#bubble-items");
    let amountItem = 0;
  
    const listTeddySelect = JSON.parse(localStorage.getItem("listTeddySelect"));
    listTeddySelect.forEach((element) => {
      amountItem += element.productQuantity;
    });
    console.log(amountItem);
    notificationBasket.innerHTML = `<span>${amountItem}</span>`;
  };