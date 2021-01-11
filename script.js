
  // --------------------------------SLIDERS

  const arrowLeft = document.querySelector('.slider__arrow--left');
  const arrowRight = document.querySelector('.slider__arrow--right');
  const sliders = document.querySelector('.sliders');
  const images = document.querySelectorAll('.slider__photo');
  
  let counter = 0;
  images[counter].style.display = 'block';
  arrowRight.addEventListener('click', () => {
    let nextIndex = counter + 1;
  
    if (nextIndex >= images.length) {
      nextIndex = 0;
    }
  
    const next = images[nextIndex];
    sliders.append(next);
    next.style.display = 'block';
    next.style.animation = 'moveRight 1s';
  
    counter += 1;
    if (counter >= images.length) {
      counter = 0;
    }
  });
  
  arrowLeft.addEventListener('click', () => {
    let prevIndex = counter - 1;
  
    if (prevIndex < 0) {
      prevIndex = images.length - 1;
    }
  
    const prev = images[prevIndex];
    sliders.append(prev);
    prev.style.display = 'block';
    prev.style.animation = 'moveLeft 1s';
  
    counter -= 1;
    if (counter < 0) {
      counter = images.length - 1;
    }
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

const tags = document.getElementsByClassName('tag');
   for (let i = 0; i < tags.length; i++) {
     tags[0].classList.add('activ');
    tags[i].onclick = tabclick
  };
  
  const imageNodes = document.querySelectorAll('section > img');
  
  function tabclick(event) {
    let tag = event.target;
    let tagId = tag.dataset.id;
  
    for (let i = 0; i < tags.length; i++) {
      tags[i].classList.remove('activ');
    }
    this.classList.add('activ');
    imageNodes.forEach(img => {
      if (img.dataset.id === tagId || tagId === 'all') {
        return img.classList.add('activ')
      } else {
         return img.classList.remove('activ')
      }
    });
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
 
 
 
function resetChangeColor() {
  homeHeader.classList.remove('changeColor');
  servicesHeader.classList.remove('changeColor');
  portfolioHeader.classList.remove('changeColor');
  aboutHeader.classList.remove('changeColor');
  contactHeader.classList.remove('changeColor');
};




  









