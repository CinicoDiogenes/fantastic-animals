const imgs = document.querySelectorAll('img');

let i = 0;
imgs.forEach(function(item, index, array){
  // console.log(item, index, array);
});

const titulos = document.getElementsByClassName('titulo');
const tituloArray = Array.from(titulos);

console.log(titulos); //HTML Collection
console.log(tituloArray); //Array 

tituloArray.forEach(item => { // Nova sintax para Functions ! 
console.log(item);
});


