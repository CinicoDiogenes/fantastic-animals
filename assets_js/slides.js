// ID getElementById seleciona elementos com ID no hmtl via DOM 

// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');

// console.log(animais.innerText);

//Classes e Tag  getElementByIdByClassesName e getElementByIdByTagName

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);

const animais = document.querySelector('.animais');
const contato2 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]'); // Selecionado do item que tenha um href '^=' começar com o valor que vem dps que no caso seria o https://
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');// boa prática! leia e interprete o raciocínio do codigo

// AULA 0303 DOM 

// HTMLCollection vc NodeLis 
// A diferença está nos métodos e propriedades de ambas. Além disso o NodeList retornada com querySekectorAll é estatica.

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('gird-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

const gridSection2 = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});


// Aula 0304 ForEach e Arrow Function 

// forEach

// Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
const imgs1 = document.querySelectorAll('img');

imgs1.forEach(function(item){
  console.log(item);
});

// Parâmetros do forEach
// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;

const imgs2 = document.querySelectorAll('img');

imgs2.forEach(function(valorAtual, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos); // Esse eh o metodo que converte um array-like para un Array em caso de nao ter a propriedade que queremos trabalhar

titulosArray.forEach(function(item){
  console.log(item);
});

// Arrow Function

// Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});

// Se vc tiver somente 1 unico argumento em function, as parenteses criadas pode ser removidas 
const imgs0 = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs0.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs0.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs0.forEach(() => {
  console.log(i++);
});

imgs0.forEach(()=> console.log(i++)); // versao curta do codigo

// É possível omitir as chaves {} para uma função que retorna uma linha.
const imgs01 = document.querySelectorAll('img');

imgs01.forEach(item => 
  console.log(item)
);

imgs01.forEach(item => console.log(item));

// AULA 0305 Calsses e Atributos 
classList

// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

// attributes
// Retorna uma array-like com os atributos do elemento.

const animais3 = document.querySelector('.animais');

animais3.attributes; // retorna todos os atributos
animais3.attributes[0]; // retorna o primeiro atributo


/*getAttribute e setAttribute

Métodos que retornam ou definem de acordo com o atributo selecionado */

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo



// Read Only vs Writable

// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais4 = document.querySelector('.animais');

animais4.className; // string com o nome das classes
animais4.className = 'azul'; // substitui completamente a string
animais4.className += ' vermelho'; // adiciona vermelho à string

animais4.attributes = 'class="ativo"'; // não funciona, read-only

// AULA 0306 Dimensoes e distancias DOM 

/*Height e Width

Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only */

const section = document.querySelector('.animais');

section.clientHeight; // height + padding 
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll    


// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;


/*getBoundingClientRect()

Método que retorna um objeto com valores de width, height, distâncias do elemento e mais. Basicamente esse metodo te devolve todas as medias do elemnto*/


const rect = section.getBoundingClientRect(); // metodo que da as cordenadas dimensionais do elemento selcionado.  
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// Window

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

/*matchMedia();

Utilize um media-querie como no CSS para verificar a largura do browser */

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

// DICA 
/*

    Selecione o elemento no inspetor (dom)

    Abra o console e digite $0 para selecionar o mesmo

    Os elementos selecionados anteriormente são $1, $2 ...
 */

  
/* addEventListener

Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.*/

const img00 = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img00.addEventListener('click', function() {
  console.log('Clicou');
})

/*Callback

É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima */

const img000 = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img000.addEventListener('click', callback); // 🚀
img000.addEventListener('click', callback()); // undefined
img000.addEventListener('click', function() {
  console.log('Clicou');
})
img000.addEventListener('click', () => {
  console.log('Clicou');
})

/*Event

O primeiro parâmetro do callback é referente ao evento que ocorreu. */

const img0000 = document.querySelector('img');

function callback(event) {
  console.log(event);
}

img0000.addEventListener('click', callback);

/*event */

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

/*event.preventDefault()

Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado. */

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

/*this

A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado. */

const img5 = document.querySelector('img');

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

img5.addEventListener('click', callback);

/*Diferentes Eventos

Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também. */

const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);

// https://developer.mozilla.org/en-US/docs/Web/Events

/*Keyboard

Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard. */

function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);

/*forEach e Eventos

O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles. */

const imgs11 = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs11.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

/*outerHTML, innerHTML e innerText

Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'. */


const menu00 = document.querySelector('.menu');

menu00.outerHTML; // todo o html do elemento
menu00.innerHTML; // html interno
menu00.innerText; // texto, sem tags

menu00.innerText = '<p>Texto</p>'; // a tag vai como texto
menu00.innerHTML = '<p>Texto</p>'; // a tag é renderizada

/*Trasversing

Como navegar pelo DOM, utilizando suas propriedades e métodos. */

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho


/*Element vs Node

Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais. */


const lista8 = document.querySelector('.animais-lista');

lista8.previousElementSibling; // elemento acima
lista8.previousSibling; // node acima

lista8.firstChild; // primeiro node child
lista8.childNodes; // todos os node child


/*Manipulando Elementos

É possível mover elementos no dom com métodos de Node. */

const lista3 = document.querySelector('.animais-lista');
const contato3 = document.querySelector('.contato');
const titulo3 = contato.querySelector('.titulo');

contato3.appendChild(lista); // move lista para o final de contato
contato3.insertBefore(lista, titulo); // insere a lista antes de titulo
contato3.removeChild(titulo); // remove titulo de contato
contato3.replaceChild(lista, titulo); // substitui titulo por lista

/**Novos Elementos

Podemos criar novos elementos com o método createElement() */

const animais11 = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais11.appendChild(novoH1);


/**Clonar Elementos

Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode() */

const titulo20 = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
const contato000 = document.querySelector('.contato');
contato000.appendChild(cloneTitulo);











