const ListaAnimais = document.querySelector('.animais-lista');
heightScroll = ListaAnimais.scrollHeight;
console.log(heightScroll);
console.log(ListaAnimais.scrollWidth);

const section = document.querySelector('.animais');
const janela = document.querySelector('window');
const heightPadding = section.clientHeight;
console.log(heightPadding);
const heightPaddingBord = section.offsetHeight;
console.log(heightPaddingBord);
const topDistance = section.offsetTop;
console.log(topDistance);
const leftDistance = section.offsetLeft;
console.log(leftDistance);

const rect = section.getBoundingClientRect();
const height1 = rect.height;
console.log(rect);
rect.width;
rect.top;

//WINDOW !

const windowSizeW = window.innerWidth;
const windowSizeH = window.innerHeight;
const windowOutH = window.outerHeight;
const windowOutW = window.outerWidth;
const windowScX = window.pageXOffset;
const windowScY = window.pageYOffset;
console.log(windowSizeW);
console.log(windowSizeH);
console.log(windowOutH);
console.log(windowOutW);
console.log(windowScX);
console.log(windowScY);

if(windowSizeW < 600){
  console.log('Essa janela tem width menor que 600.');
}

const small = window.matchMedia('(max-width: 600px)');

if(small.matches){
  console.log('Tela menor que 600px');
}else{
  console.log('Tela ultrapassou os 600px');
}


