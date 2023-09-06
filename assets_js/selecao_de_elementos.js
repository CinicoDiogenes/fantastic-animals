//Seleção de elementos 



const animais = document.getElementById('animais');
const gridSection = document.getElementsByClassName('grid-section');


const primeiaLi = document.querySelector('li');
const todasLi = document.getElementsByTagName('li');
const primeiraUl = document.querySelector('ul');
const todasUl = document.getElementsByTagName('ul');

const linksInt = document.querySelector('[href^="#"]'); 
console.log(linksInt);
const linksInt2 = document.querySelectorAll('[href^="#"]');
console.log(linksInt2);

const animaisImg = document.querySelectorAll('.animais img'); // querySelectors sao estaveis. Os valores nao mudaram mediante alguma alteração/adição no codigo. Diferente do getElements.
console.log(animaisImg[1], animaisImg[2]);

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
  console.log(item, index);

});

const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);

arrayGrid.forEach(function(item){
  console.log(item);
});

// AULA 0304 forEach e Arrow Function

