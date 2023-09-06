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
  initTabNav()
  
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
  initiAccordion()
  
  
  
  
  
  
  
  