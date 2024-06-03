







var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.gallery-swipe-right',
        prevEl: '.gallery-swipe-left',
      },
    
    breakpoints: {
        // when window width is >= 320px
        180: {
          grid: {
            rows: 1,
          },
      slidesPerView: 1,
      spaceBetween: 20,
      slidesOffsetAfter: 50,
        },
        // when window width is >= 480px
        480: {
            grid: {
                rows: 1,
              },
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        800: {
            grid: {
                rows: 2,
              },
          slidesPerView: 4,
          spaceBetween: 10,
          slidesOffsetAfter: 1000,
        }
      }
    
      
    
  });

  var swipery = new Swiper(".unique-swiper-container", {
    
   
    slidesPerView: 3.99,
    navigation: {
        nextEl: '.emission-next-but',
        prevEl: '.emission-prev-but',
      },
      breakpoints: {
    
        // when window width is >= 480px
        100: {
            grid: {
                rows: 1,
              },
          slidesPerView: 2,
          spaceBetween: 20,
          
        },
        // when window width is >= 640px
        1200: {
            grid: {
                rows: 1,
              },
          slidesPerView: 3.9,
          spaceBetween: 40
        }
      }
  });


  var swiperiftar = new Swiper(".iftar-swiper", {
    navigation: {
      nextEl: ".iftar-swiper-button-next",
      prevEl: ".iftar-swiper-button-prev",
    },
    slidesPerView: 1.1
  });

  var swiperdoctor = new Swiper(".doctor-swiper", {
    navigation: {
      nextEl: ".iftar-swiper-button-next",
      prevEl: ".iftar-swiper-button-prev",
    },
  });
  
  var swiperdoctor = new Swiper(".suit-swiper", {
    navigation: {
      nextEl: ".iftar-swiper-button-next",
      prevEl: ".iftar-swiper-button-prev",
    },
  });
  
  const reobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
      else{
        entry.target.classList.remove('visible');
      }
    });
  });
  
  const nobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
      
    });
  });


const arrowdown = document.querySelector('.arrow-down');
const carder = document.querySelector('.carder')
const personalinfo = document.querySelector('.personal-info');

const personaltoggle = document.querySelector(".side-personal");
const personalsection = document.querySelector('.personal-section');
const personalx = document.querySelector('.close-personal');
const menu = document.getElementById('nav-menu');
const menuToggle = document.getElementById('nav-menu-toggle');
const menuClose = document.getElementById('nav-menu-close');

var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var body = document.querySelector("body");


searchicon = document.querySelector('.search-logo');
searchbar = document.querySelector('#search');
alerticon = document.querySelector('.alert-icon-div');
alertparagraph = document.querySelector('.alert-paragraph');
closealert = document.querySelector('.close-alert');

const closequick = document.querySelector(".close-quick");
const quicksection = document.querySelector(".quick-section")
const quicktoggle = document.querySelector(".side-globe")

const closepoll = document.querySelector(".close-poll");
const pollsection = document.querySelector(".poll-section");
const polltoggle = document.querySelector(".side-poll");

const navlogo = document.querySelector('.nav-logo');

const navitems = document.querySelectorAll(".nav-link");
const redline = document.querySelectorAll(".red-line");
const eventers = document.querySelectorAll(".event")

const comiitedpar = document.querySelector('.comitted-par')
const learnmore = document.querySelector('.learn-more-btn');
const achevislide = document.querySelectorAll('.unique-swiper-slide');

const carousel = document.querySelector('.carousel-whole-container')
const upcomingevents  = document.querySelector(".upcoming-events")
const carouselcontroller = document.querySelector('.first-carousel');

const gallerymedia = document.querySelector(".media-title")
const gallerytitle = document.querySelector(".title-row")
const gallery = document.querySelectorAll('.gallery-items')

const swiperslide = document.querySelectorAll(".link-swiper")

const footer = document.querySelector('.footer');

nobserver.observe(footer)
nobserver.observe(gallerymedia)
nobserver.observe(gallerytitle)
nobserver.observe(menuToggle)
nobserver.observe(navlogo);
nobserver.observe(carousel);
nobserver.observe(upcomingevents);
nobserver.observe(comiitedpar);
nobserver.observe(learnmore);
nobserver.observe(carouselcontroller)

gallery.forEach((el)=>nobserver.observe(el));
navitems.forEach((el)=>reobserver.observe(el));
redline.forEach((el)=>nobserver.observe(el));
eventers.forEach((el)=>nobserver.observe(el));
achevislide.forEach((el)=>nobserver.observe(el));
swiperslide.forEach((el)=>nobserver.observe(el));



personaltoggle.addEventListener('click',function(){
    personaltoggle.classList.toggle("active");
    polltoggle.classList.remove("active");
    quicktoggle.classList.remove("active");

    personalsection.classList.toggle("active");
    pollsection.classList.remove("active");
    quicksection.classList.remove("active");
    })
    
    
    personalx.addEventListener('click',function(){
        personaltoggle.classList.toggle("active");
        polltoggle.classList.remove("active");
        quicktoggle.classList.remove("active");

        personalsection.classList.toggle("active");
        pollsection.classList.remove("active");
    quicksection.classList.remove("active");
        })
    

closequick.addEventListener('click',function(){
    quicktoggle.classList.toggle("active");
    polltoggle.classList.remove("active");
    personaltoggle.classList.remove("active");

    quicksection.classList.toggle("active");
    pollsection.classList.remove("active");
    personalsection.classList.remove("active");
   
    })

quicktoggle.addEventListener('click',function(){
    quicktoggle.classList.toggle("active");
    personaltoggle.classList.remove("active");
    polltoggle.classList.remove("active");

    personalsection.classList.remove("active");

    pollsection.classList.remove("active");
    
    quicksection.classList.toggle("active");
    })

    polltoggle.addEventListener('click',function(){
        polltoggle.classList.toggle("active");
        personaltoggle.classList.remove("active");
        quicktoggle.classList.remove("active");
    
        pollsection.classList.toggle("active");
        personalsection.classList.remove("active");
        quicksection.classList.remove("active");
    
        })
    
    closepoll.addEventListener('click',function(){
            polltoggle.classList.toggle("active");
            personaltoggle.classList.remove("active");
            quicktoggle.classList.remove("active");
    
            
            pollsection.classList.toggle("active");
            personalsection.classList.remove("active");
            quicksection.classList.remove("active");
            })



    arrowdown.addEventListener('click',function(){
        arrowdown.classList.toggle("active");
        personalinfo.classList.toggle("active");
        })

    carder.addEventListener('click',function(){
      arrowdown.classList.toggle("active");
      personalinfo.classList.toggle("active");
      })
        
        closealert.addEventListener('click', function(){
          alertparagraph.classList.remove(`visible`);
          alerticon.classList.remove('visible');
      })
      

alerticon.addEventListener('click', function(){
    alertparagraph.classList.toggle(`visible`);
    alerticon.classList.toggle('visible');
})



menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    body.classList.toggle('active-nav');
  
});




searchicon.addEventListener(`click`, function() {
    searchbar.classList.toggle(`show-search`);
  });

  