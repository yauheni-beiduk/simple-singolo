

const arrowLeft = document.querySelector('.slider_left img');
const arrowRight = document.querySelector('.slider_right img');

arrowLeft.addEventListener('click', () => {
    alert('Slide');
  });

arrowRight.addEventListener('click', ()=> {
  alert('Slide');
});


  const burgerButton = document.querySelector('#burgerImage');
  const burgerMenu = document.querySelector("#header");
  burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle("active");
   
  });

  const BurgerClose = document.querySelector(".burger-burger");
  BurgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });


    /*-----------------------Portfolio tags---------------*/

    const tagAll = document.querySelector('#tagAll');
    tagAll.addEventListener('click', () => {
      resetChangeColor();
    tagAll.classList.add('colorTag');
    });
  
    const tagWebDesign = document.querySelector('#tagWebDesign');
    tagWebDesign.addEventListener('click', () => {
      resetChangeColor();
      tagWebDesign.classList.add('colorTag');
    });
  
    const tagGraphicDesign = document.querySelector('#tagGraphicDesign');
    tagGraphicDesign.addEventListener('click', () => {
      resetChangeColor();
      tagGraphicDesign.classList.add('colorTag');
    });
  
    const tagArtWork = document.querySelector('#tagArtWork');
    tagArtWork.addEventListener('click', () => {
      resetChangeColor();
      tagArtWork.classList.add('colorTag');
    });

  /* -------------------Navigation Color-------------*/


  const homeHeader = document.querySelector('#homeHeader') ;
  homeHeader.addEventListener('click', () => {
    resetChangeColor();
    homeHeader.classList.add('changeColor');
  });

  const servicesHeader = document.querySelector('#servicesHeader') ;
  servicesHeader.addEventListener('click', () => {
    resetChangeColor();
    servicesHeader.classList.add('changeColor');
  });

  const portfolioHeader = document.querySelector('#portfolioHeader') ;
  portfolioHeader.addEventListener('click', () => {
    resetChangeColor();
    portfolioHeader.classList.add('changeColor');
  });

  const aboutHeader = document.querySelector('#aboutHeader') ;
  aboutHeader.addEventListener('click', () => {
    resetChangeColor();
    aboutHeader.classList.add('changeColor');
  });


  const contactHeader = document.querySelector('#contactHeader') ;
  contactHeader.addEventListener('click', () => {
    resetChangeColor();
    contactHeader.classList.add('changeColor');
  });

  function resetChangeColor() {
    homeHeader.classList.remove("changeColor");
    servicesHeader.classList.remove('changeColor');
    portfolioHeader.classList.remove('changeColor');
    aboutHeader.classList.remove('changeColor');
    contactHeader.classList.remove('changeColor');



    tagAll.classList.remove('colorTag');
    tagWebDesign.classList.remove('colorTag');
    tagGraphicDesign.classList.remove('colorTag');
    tagArtWork.classList.remove('colorTag');
  };


 