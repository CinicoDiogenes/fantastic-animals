function initTabNav(){
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length){ // Verificação de existencia dos valores 
  tabContent[0].classList.add('ativo'); // ter sempre o primeiro texto em vista quando se entra na pagina 
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }  
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', function(){
      activeTab(index)
    });
  });
}}
initTabNav();

function initiAccordion(){  
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if(accordionList){
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);
  function activeAccordion(){
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }  
  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
  } 
}
initiAccordion();

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function initScroll(){
  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    //Forma alternativa 
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })
  }
  
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  
  });
}
initScroll();

function initAnimationScroll(){  
  const sections = document.querySelectorAll('.js-scroll');
if(sections.length){  
  const windowMetade = window.innerHeight * 0.6 // codigo para calcular o efeito ao 60% da tela independent do tamanho de px do minitor de qlqer usuario
  function animaScroll(){
    sections.forEach((section) => {
      const activeClass = 'ativo'
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;   
      if(isSectionVisible)
       section.classList.add(activeClass);
      else
        section.classList.remove(activeClass);
      
    });
  }
}

animaScroll()
window.addEventListener('scroll', animaScroll)
}
initAnimationScroll()















