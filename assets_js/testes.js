
const body = document.querySelector('body');
const btnPurple = document.getElementById('btnPurple')
const btnYlw = document.getElementById('btnYlw');
const btnGreen = document.getElementById('btnGreen');
const btnRed = document.getElementById('btnRed');

const colorsClass = document.getElementsByClassName('.purple','.red', '.green', '.yellow');
let colors = Array.from(colorsClass);
const allColors =  colorsClass['purple', 'red', 'green', 'yellow'];

function purple() { 
  document.body.classList.remove(allColors);
  document.body.classList.toggle('purple');
  const textP = document.getElementById('#btnPurple');
  textP.innerHTML = '<button>On</button>'

}
function green() { 
  document.body.classList.remove(allColors);
  document.body.classList.toggle('green');

}
function yellow() { 
  document.body.classList.remove(allColors);
  document.body.classList.toggle('yellow');

}
function red() { 
  document.body.classList.remove(allColors);
  document.body.classList.toggle('red');

}
btnPurple.addEventListener('click', purple );
btnYlw.addEventListener('click',yellow );
btnRed.addEventListener('click', red );
btnGreen.addEventListener('click', green );



// let takeOut = confirm('Do want take out the purple color? ');

// while(takeOut === true){
// if(takeOut === true) {
//   body.classList.remove('purple');
// }

// let putOn = confirm('Do want to put on another color on the website? ');

// if(putOn === true){
//   let ask = prompt('Which color do you like ? Yellow, Red or Green? ').toLocaleLowerCase().trim();
//     if(ask === 'yellow'){
//       body.classList.add('yellow');
//     }else if(ask === 'red'){
//       body.classList.add('red');
//     }else if(ask === 'green'){
//       body.classList.add('green');
//     }
// }else{
//   body.classList.toggle('purple');
//   alert('The chosen color no exist, or you didnt choose any color.');
// }break
// }

 
// const btn1 = document.getElementsByClassName('btn1'); // Erro, a function esta ativando con click fora do botao que asigno
//   if(btn1){   
//      btn1 = document.addEventListener('click', function(){
//     return  window.location.reload(); 
//   }
 
//  );
// }
