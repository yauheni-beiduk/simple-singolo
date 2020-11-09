
  // --------------------------------SLIDERS

const arrowLeft = document.querySelector('.slider_left img');
const arrowRight = document.querySelector('.slider_right img');
const slider = document.querySelector('#slider');
arrowLeft.addEventListener('click', () => {
slider.classList.toggle('sliderActive');
});
arrowRight.addEventListener('click', () => {
  slider.classList.toggle('sliderActive');
});

/* ------------------Burger Menu -------------------------*/

  const burgerButton = document.querySelector('#burgerImage');
  const burgerMenu = document.querySelector("#header");
  const body = document.querySelector('#body');
  const BurgerClose = document.querySelector(".burger-burger");
  const homeBurger = document.querySelector('#homeBurger');
  const servicesBurger = document.querySelector('#servicesBurger');
  const portfolioBurger = document.querySelector('#portfolioBurger');
  const aboutBurger = document.querySelector('#aboutBurger');
  const contactBurger = document.querySelector('#contactBurger');

  burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle("active");
    body.classList.add('active');
  });
 
  BurgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    body.classList.remove('active');
  });

  homeBurger.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    body.classList.remove('active');
    
  });

  servicesBurger.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    body.classList.remove('active');
  });
  
  portfolioBurger.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    body.classList.remove('active');
  });

  aboutBurger.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    body.classList.remove('active');
  });
  
  contactBurger.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    body.classList.remove('active');
  });

 

  /* -------------------Navigation Color-------------*/


  const homeHeader = document.querySelector('#homeHeader');
  const servicesHeader = document.querySelector('#servicesHeader');
  const portfolioHeader = document.querySelector('#portfolioHeader');
  const aboutHeader = document.querySelector('#aboutHeader');
  const contactHeader = document.querySelector('#contactHeader') ;


  homeHeader.addEventListener('click', () => {
    resetChangeColor();
    homeHeader.classList.add('changeColor');
  });

  servicesHeader.addEventListener('click', () => {
    resetChangeColor();
    servicesHeader.classList.add('changeColor');
  });

  portfolioHeader.addEventListener('click', () => {
    resetChangeColor();
    portfolioHeader.classList.add('changeColor');
  });

  aboutHeader.addEventListener('click', () => {
    resetChangeColor();
    aboutHeader.classList.add('changeColor');
  });

  contactHeader.addEventListener('click', () => {
    resetChangeColor();
    contactHeader.classList.add('changeColor');
  });


   /*--------------------------Sort Images-----------------------*/ 
   const imagesOne = document.querySelector('#imagesOne');
   const tagAll = document.querySelector('#tagAll');
   const tagWebDesign = document.querySelector('#tagWebDesign');
   const tagGraphicDesign = document.querySelector('#tagGraphicDesign');
   const tagArtWork = document.querySelector('#tagArtWork');

   tagAll.addEventListener('click', () => {
     resetChangeColor();
   tagAll.classList.add('colorTag');
   imagesOne.classList.toggle('changeImages');
   });
 
   tagWebDesign.addEventListener('click', () => {
     resetChangeColor();
     tagWebDesign.classList.add('colorTag');
     imagesOne.classList.toggle('changeImages');
   });
 
   tagGraphicDesign.addEventListener('click', () => {
     resetChangeColor();
     tagGraphicDesign.classList.add('colorTag');
     imagesOne.classList.toggle('changeImages');
   });
 
   tagArtWork.addEventListener('click', () => {
     resetChangeColor();
     tagArtWork.classList.add('colorTag');
     imagesOne.classList.toggle('changeImages');
   });


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
 
 
 
function resetChangeColor() {
  homeHeader.classList.remove('changeColor');
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




  









