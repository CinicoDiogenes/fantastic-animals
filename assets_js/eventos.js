const img = document.querySelector("img");

function callback(event) {
  console.log(event);
}

// img.addEventListener('click', callback);

const animaisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  console.log(event.path);
}

animaisLista.addEventListener("click", callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function hadleLink(event) {
  event.preventDefault();
  console.log(this.getAttribute("href"));
}
linkExterno.addEventListener("click", hadleLink);

const h1 = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener("click", handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', callback);
// window.addEventListener('resize', callback);

function hadleKeyboard(event) {
  if (event.key === "g") {
    document.body.classList.toggle("green");
  } else if (event.key === "p") {
    document.body.classList.toggle("purple");
  } else if (event.key === "y") {
    document.body.classList.toggle("yellow");
  } else if (event.key === "r") {
    document.body.classList.toggle("red");
  }
}
window.addEventListener("keydown", hadleKeyboard);


//Img ja foi estanciada globalmente 



const imgs = document.querySelectorAll('img');

function handleImg(event){
  console.log(event.currentTarget.getAttribute('src'));
  
}


imgs.forEach((pic)=> {
  pic.addEventListener('click', handleImg);

});
