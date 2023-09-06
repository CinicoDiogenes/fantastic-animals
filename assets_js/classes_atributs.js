const menu = document.querySelector('.menu');
menu.classList.add('black', 'pink');
menu.classList.remove('red', 'green');
menu.classList.toggle('ylw');
menu.classList.toggle('ylw');// <-- remove this code for testing


if(menu.classList.contains('ylw')){
    menu.classList.add('white', 'purple');
}else{
  menu.className += 'navy' +  ' aquamarine'; // Manera mais antiga de adicionar classes. Esse propriedade prescreve os valores da classe.
}
console.log(menu.classList);

const animais = document.querySelector('.animais');

console.log(animais.attributes['data-texto']); // data-texto é um atributo, por tanto se quiser seu valor devolvido,tratarlo como atributo (colocarlo em colchetes).
console.log(animais.attributes[1]);

const img = document.querySelector('img');
console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));

const altImg = img.getAttribute('alt');

img.setAttribute('alt', 'Galo ganhou da raposa');
console.log(altImg);
console.log(img.getAttribute('alt'));

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

if(possuiAlt === true){
  img.removeAttribute('alt');  
}
const hasAlt = img.hasAttribute('alt');
console.log(hasAlt);



