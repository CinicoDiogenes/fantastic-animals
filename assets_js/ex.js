// // // Retorne no console todas as imagens do site

// // const allImgs = document.querySelectorAll('img');
// // console.log(allImgs);

// // // Retorne no console apenas as imagens que começaram com a palavra imagem
// //  const onlyImgs = document.querySelectorAll('img[src^="img/imagem"]');
// //  console.log(onlyImgs);

// // // Selecione todos os links internos (onde o href começa com #)
// // const linkInternos = document.querySelectorAll('[href^="#"]');
// // console.log(linkInternos);

// // // Selecione o primeiro h2 dentro de .animais-descricao
// // const primeiroh2 = document.querySelectorAll('.animais-descricao h2');
// // console.log(primeiroh2[0]);
// // // Selecione o último p do site

// // const lastP = document.getElementsByTagName('p');
// // console.log(lastP[--lastP.length]);


// // // Mostre no console cada parágrado do site
// // const paragrafo = document.querySelectorAll('p');
// // const paragrafoArray = Array.from(paragrafo);

// // paragrafoArray.forEach((item, index, array) => {
// //   console.log(item);
// // });

// // // Mostre o texto dos parágrafos no console

// // paragrafoArray.forEach((item, index, array) => {
// //   console.log(item.innerText);
// // });

// // // Como corrigir os erros abaixo:
// // const imgs = document.querySelectorAll('img');
// // const imgsArray = Array.from(imgs);

// // imgsArray.forEach((item, index) => {
// //   console.log(item, index);
// // });

// // let i = 0;
// // imgsArray.forEach(() => {
// //   console.log(i++);
// // });

// // imgsArray.forEach(() => i++);

// // console.log(i);


// // // Adicione a classe ativo a todos os itens do menu

// //  const itensMenu = document.querySelectorAll('.menu a');

// //  itensMenu.forEach((item) => {
// //   item.classList.add('ativo');
// // });



// // // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro



// // itensMenu.forEach((item,array) => {
// //  item.classList.remove('ativo');
// // });
// // itensMenu[0].classList.add('ativo');

// // // Verifique se as imagens possuem o atributo alt

// // const imgs0 = document.querySelectorAll('img');

// // imgs0.forEach((img) => {
// //  const hasAlt = img.hasAttribute('alt');
// //  console.log(hasAlt);
  
// // });
// // // Modifique o href do link externo no menu

// // const hf = document.querySelector('a[href^="http"]');
// // console.log(hf);

// // hf.setAttribute('href', 'https://lenguajejs.com/javascript/eventos/addeventlistener/');
// // console.log(hf);


// // EXERCÍCIO 0306 Dimensoes e distancias 

// // Verifique a distância da primeira imagem
// // em relação ao topo da página

// const img1 = document.querySelector('img');
// const imgTop = img1.offsetTop;
// console.log(imgTop);

// // Retorne a soma da largura de todas as imagens
// // Primeira maneira que ja funcionou
// const allImg = document.querySelectorAll('img');
// let soma = 0;
// allImg.forEach(item => {
// soma += item.offsetWidth;
// }); 
// console.log(soma);

// //Segunda maneira que funcione caso nao carregue as imagens antes do JS
// // somaImagens = function()
// // {const imagens = document.querySelectorAll('img');
// // imagens.forEach((item)=> {

// // console.log(item.offsetWidth);
// // });}


// // window.onload = function(){
// //   somaImagens();
// // }

// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)

// const allLinks = document.querySelectorAll('a');
// allLinks.forEach((link) => {
// console.log(link);
// const linksW = link.offsetWidth;
// const linksH = link.offsetHeight;
// if(linksH  >= 48 && linksW >= 48){
//   console.log('Available for fingers touch');
// }else{
//   console.log('Dont available for fingers touch ');
// }
// });


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu


// const browser = window.matchMedia('(max-width:720px)');

// if(browser.matches){
//   const menu = document.querySelector('.menu');
//   menu.classList.add('mobile');
// }else{
//   console.log('Browser ok');
// }

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const InternalLinks = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
  event.preventDefault();
  console.log(event);
  InternalLinks.forEach((link) => {
    link.classList.remove('ativo');
  });
  this.classList.add('ativo');
}

InternalLinks.forEach((link) => {
  link.addEventListener('click', handleLink)
  
});


// EXERCÏCIO 0307 EVENTOS 2


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

/*const todosElementos = document.querySelectorAll('body *');
function mostra(event){
console.log(event.currentTarget);
}

todosElementos.forEach((link) => {
  link.addEventListener('click', mostra);
}); */


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

/*const todosElementos0 = document.querySelectorAll('body *');
function mostra(event){
this.remove(this);
// event.currentTarget.remove();
console.log(this);
} */


// todosElementos0.forEach((link) => {
//   link.addEventListener('click', mostra);
// });
// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

// function aumenta(event){
//   console.log(event.key)
//   if(event.key === 't'){
//     console.log('clicou t');
//     document.documentElement.classList.toggle('textarea');
//   }

// }
// window.addEventListener('keydown', aumenta);


// EXERCICIO 0308 travesing e manipulacao 2

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const novoMenu = menu.cloneNode(true); //True para clonar todos o filhos do elemnto e trazelos. Senao o fizer, o conteudo inner nao virá junto.
copy.appendChild(novoMenu);

// Selecione o primeiro DT da dl de Faq
const paiDt = document.querySelector('.faq-lista');
console.log(paiDt.children[0]);

// Selecione o DD referente ao primeiro DT
const primeiroDT = paiDt.children[0];
console.log(primeiroDT.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.getElementById('faq');
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;



