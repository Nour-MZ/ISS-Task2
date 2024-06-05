


$(document).ready(function() {
  $(document).on('click', '.carder', function(e) {
   
      $(this).find(".arrow-down").toggleClass("active")
      $(this).closest('.card-container').find('.personal-info').toggleClass("active"); // Toggle the class
      
      if ($(this).closest('.card-container').find('.personal-info').hasClass('active')){
       
        $(this).closest('.card-container').find('.personal-info').css('z-index', '3');
      console.log("activated")
        
      }
      else{
        $(this).closest('.card-container').find('.personal-info').css('z-index', '-1');
        console.log("deactivated")
      }
      e.preventDefault();
  });

  $(document).on('click', '.poll-answer', function(e) {
    $('.poll-answer').not(this).removeClass('clicked');

    e.preventDefault();

    $(".poll-answer").each(function(){
        $otherperc = $(this).find(".poll-percentage")
        $otherback = $(this).find(".poll-background")
        $(this).addClass("active");
        $otherperc.addClass("active");
        $otherint = parseInt($otherperc.html());
        $otherback.css('transform', 'translate(' + (-100+$otherint) + '%)');
        $(document).off('click', '.poll-answer');
        e.preventDefault();
      })
    
    
    $(this).addClass("clicked");
    
    
    
  });
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= 0 && $(window).scrollTop() <60 ){
    $(".colored-logo").css('display',"none")
    $(".white-logo").css('display',"block")
    $('.hero-nav').css('opacity', 1);
    $('.hero-nav').removeClass('active');
    $('.hero-nav').css('transform', 'none');
  }
  if ($(window).scrollTop() > 70 && $(window).scrollTop() <120 ) {
    $(".white-logo").css('display',"none")
    $(".colored-logo").css('display',"block")
    $('.hero-nav').css('opacity', 0);
    $('.hero-nav').css('transform', 'translateY(-50px)');
    $('.hero-nav').removeClass('active');} 
    
  else if($(window).scrollTop() > 130){
    
    $('.hero-nav').addClass('active'); 
    $('.hero-nav').css('opacity', 1);
    $('.hero-nav').css('transform', 'none'); 
  }
   else {
  
  }
});


$('.search-bar-personal').on('keyup', function() {
  
  
  var searchTerm = $(this).val().toLowerCase();
  console.log(searchTerm)

  $('.carder').each(function() { 
    $(this).css('display', 'none');
    // Target individual cards
      var cardTitle = $(this).find('.card-title').text().toLowerCase();
      var cardText = $(this).find('.card-text').text().toLowerCase();
      if(searchTerm === ""){
      
        $(this).css('display', 'none');
      }
      
      else if (cardTitle.includes(searchTerm) || cardText.includes(searchTerm)) {
          $(this).css('display', 'block'); // Show the card
      } 
      
      else {
          $(this).css('display', 'none'); // Hide the card
      }
  });
});





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
          spaceBetween: 35,
          
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

  

  

const htmlsec = document.documentElement;



const srcollobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      htmlsec.classList.add('visible');
      console.log("goo")
    }
    
  });
});

const arrowdown = document.querySelector('.arrow-down');

const carders = document.querySelectorAll(".carder");
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

const comiitedpar = document.querySelectorAll('.comitted-par')
const learnmore = document.querySelectorAll('.learn-more-btn');
const achevislide = document.querySelectorAll('.unique-swiper-slide');

const carousel = document.querySelector('.carousel-whole-container')
const upcomingevents  = document.querySelector(".upcoming-events")
const carouselcontroller = document.querySelector('.first-carousel');

const gallerymedia = document.querySelector(".media-title")
const gallerytitle = document.querySelector(".title-row")
const gallery = document.querySelectorAll('.gallery-items')

const swiperslide = document.querySelectorAll(".link-swiper")

const footercontainer = document.querySelector('.footer-container');
const footer = document.querySelector('.footer');

srcollobserver.observe(carousel)
nobserver.observe(footer)
nobserver.observe(gallerymedia)
nobserver.observe(gallerytitle)
nobserver.observe(menuToggle)
nobserver.observe(navlogo);
nobserver.observe(carousel);
nobserver.observe(upcomingevents);
nobserver.observe(carouselcontroller)

learnmore.forEach((el)=>nobserver.observe(el))
comiitedpar.forEach((el)=>nobserver.observe(el));
gallery.forEach((el)=>nobserver.observe(el));
navitems.forEach((el)=>nobserver.observe(el));
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

          //   let arrayo = [ arrowdown, carder]
          //   console.log(arrayo)

          //   carders.forEach(function(elem) {
          //     console.log("good")
          //     elem.addEventListener('click',function(){
          //     elem.classList.toggle("active");
          //     arrowdown.classList.toggle("active");
              
          //   })
          // });
          
         
    // arrowdown.addEventListener('click',function(){
      
    
    //     personalinfo.classList.toggle("active");
    //     arrowdown.classList.toggle("active");
        
    //     })

   
        
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

  