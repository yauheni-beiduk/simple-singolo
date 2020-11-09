
  // --------------------------------SLIDERS



const arrowLeft = document.querySelector('.slider_left img');
const arrowRight = document.querySelector('.slider_right img');
const slider = document.querySelector('#slider');
arrowLeft.addEventListener('click', () => {
  resetChangeColor();
slider.classList.toggle('sliderActive');
});
arrowRight.addEventListener('click', () => {
  resetChangeColor();
  slider.classList.toggle('sliderActive');
});


/* ------------------Burger Menu -------------------------*/

  const burgerButton = document.querySelector('#burgerImage');
  const burgerMenu = document.querySelector("#header");
  burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle("active");
  });

  
  

  const BurgerClose = document.querySelector(".burger-burger");
  BurgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });

  const body = document.querySelector('#body');
  burgerButton.addEventListener('click', () => {
    body.classList.add('active');
  });

  BurgerClose.addEventListener('click', () => {
    body.classList.remove('active');
  });
 
 
  const homeBurger = document.querySelector('#homeBurger');
  homeBurger.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });

  const servicesBurger = document.querySelector('#servicesBurger');
  servicesBurger.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });
  
  const portfolioBurger = document.querySelector('#portfolioBurger');
  portfolioBurger.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });

  const aboutBurger = document.querySelector('#aboutBurger');
  aboutBurger.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });
  
  const contactBurger = document.querySelector('#contactBurger');
  contactBurger.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });

  /*--------------------------Sort Images-----------------------*/ 
  const imagesOne = document.querySelector('#imagesOne');



    /*-----------------------Portfolio tags---------------*/

    const tagAll = document.querySelector('#tagAll');
    tagAll.addEventListener('click', () => {
      resetChangeColor();
    tagAll.classList.add('colorTag');
    imagesOne.classList.toggle('changeImages');
    });
  
    const tagWebDesign = document.querySelector('#tagWebDesign');
    tagWebDesign.addEventListener('click', () => {
      resetChangeColor();
      tagWebDesign.classList.add('colorTag');
      imagesOne.classList.toggle('changeImages');
    });
  
    const tagGraphicDesign = document.querySelector('#tagGraphicDesign');
    tagGraphicDesign.addEventListener('click', () => {
      resetChangeColor();
      tagGraphicDesign.classList.add('colorTag');
      imagesOne.classList.toggle('changeImages');
    });
  
    const tagArtWork = document.querySelector('#tagArtWork');
    tagArtWork.addEventListener('click', () => {
      resetChangeColor();
      tagArtWork.classList.add('colorTag');
      imagesOne.classList.toggle('changeImages');
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

    arrowLeft.classList.remove('sliderActive');
    arrowRight.classList.remove('sliderActive');
    body.classList.remove('active');
  };


  //  ---------------------Scroll-------------------
 const home = document.getElementById("homeHeader");
 const services = document.getElementById("servicesHeader");
 const portfolio = document.getElementById("portfolioHeader");
 const about = document.getElementById("aboutHeader");
 const contact = document.getElementById("contactHeader");



window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 0 && window.pageYOffset < 365) {
    home.classList.add("changeColor");
    services.classList.remove("changeColor");
    portfolio.classList.remove("changeColor");
    about.classList.remove("changeColor");
    contact.classList.remove("changeColor");
  } else if (window.pageYOffset >= 500 && window.pageYOffset < 1000) {
    services.classList.add("changeColor");
    home.classList.remove("changeColor");
    portfolio.classList.remove("changeColor");
    about.classList.remove("changeColor");
    contact.classList.remove("changeColor");
  } else if (window.pageYOffset >= 754) {
    services.classList.remove("changeColor");
    home.classList.remove("changeColor");
    portfolio.classList.add("changeColor");
    about.classList.remove("changeColor");
    contact.classList.remove("changeColor");
  } else {
    services.classList.remove("changeColor");
  }
});