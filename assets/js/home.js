
const getTeddiesProduct = async() =>
{
const reponse = await
fetch('http://localhost:3000/api/teddies');
return reponse.json();
};

/*then?*/

const myGallery = document.getElementById('content')
let domName
let domPrice
let domImage
console.log()