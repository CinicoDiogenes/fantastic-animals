// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// // h1.outerHTML = '<p>Novo Titulo</p>'

// // console.log(h1)

// const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement.parentElement);
// console.log(lista.nextElementSibling);
// console.log(lista.previousElementSibling);
// console.log(lista.children[0]);
// console.log(lista.children[-- lista.children.length]);
// console.log(lista.querySelector('li:last-child'));
// console.log(lista.childNodes);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.querySelector('.mapa');


// // contato.insertBefore(animais, mapa); // o ultimo elemento 'mapa', tem q ser filho do elemnet primeiro que recebe o metodo q no caso é o 'contato'.

// // contato.remove(titulo);

// // contato.replaceChild(lista, titulo);

// const novoH1 = document.createElement('h1')
// novoH1.innerText = 'Novo Titulo';
// novoH1.classList.add('titulo');
// mapa.appendChild(novoH1)
// console.log(novoH1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq')

const cloneH1 = h1.cloneNode(true) 
cloneH1.classList.add('green');
faq.appendChild(cloneH1);





