gsap.registerPlugin(ScrollTrigger) 


$(document).ready(function() {
  $(document).on('click', '.carder', function(e) {
   
    
    e.preventDefault();
});

$(function() {
    
  $(".imgLiquidFill").imgLiquid({
      fill: true,
      horizontalAlign: "center",
      verticalAlign: "center"
  });
  
  $(".imgLiquidNoFill").imgLiquid({
      fill: false,
      horizontalAlign: "center",
      verticalAlign: "50%"
  });
  
});

  $(".carder").on("click", function(e){

    $(this).toggleClass("active");
  })
  $(document).on('click', '.carder', function(e) {
      // $(".carder").each(function(){
      //   $(this).find(".arrow-down").removeClass("active")
      //   $(this).closest('.card-container').find('.personal-info').removeClass("active");
      //   e.preventDefault();
      // })

      arrow = $(this).find(".arrow-down")
      info = $(this).closest('.card-container').find('.personal-info');

      arrow.toggleClass("active");
      info.toggleClass("active"); // Toggle the class

    
      if (info.hasClass('active')){
       
        console.log("activated")
        
      }
      else{
      
       
       

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
  if ($(window).scrollTop() > 61 && $(window).scrollTop() <120 ) {
    $(".white-logo").css('display',"none")
    $(".colored-logo").css('display',"block")
    $('.hero-nav').css('opacity', 0);
    $('.hero-nav').css('transform', 'translateY(-50px)');
    $('.hero-nav').removeClass('active');} 
    
  else if($(window).scrollTop() >122){
    $(".white-logo").css('display',"none")
    $(".colored-logo").css('display',"block")
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

const heroswiper = new Swiper('.hero-swiper', {
  
  navigation: {
    nextEl: '.hero-swiper-right',
    prevEl: '.hero-swiper-left',
  },
 speed:700,
  effect: "fade",
  loop:true
 
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
      slidesPerView: 1.22,
      spaceBetween: 20,
      
        },
        // when window width is >= 480px
        
        // when window width is >= 640px
        800: {
            grid: {
                rows: 2,
              },
          slidesPerView: 4,
          spaceBetween: 20,
          
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
          slidesPerView: 1.4,
          spaceBetween: 0,
          
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
  
  // $(window).on('load', function() {
  //   $('#iftarModal').modal('show');
  //   $('#iftarModal').modal('hide');
  // });

  $(".close-modal").on("click",function(){
    swiperiftar.slideTo(0, 100000000, true);
    
  })


    const swiperiftar = new Swiper(".iftar-swiper", {
      
      navigation: {
        nextEl: ".iftar-swiper-button-next",
        prevEl: ".iftar-swiper-button-prev",
      },
      on: {
        afterInit: function () {
          console.log("initiialized");
          
          $(".swiper-button-prev").css("opacity", "0");
          
        $(".close-modal").on("click",function(){
            swiperiftar.slideTo(0, 100000000, true);
            
          })
      },
      
    },
    
      slidesPerView: 1,
      
      observer: true,
      runCallbacksOnInit: true
      
     
    });
    
    console.log(swiperiftar.update())

  swiperiftar.slideTo(0, 100000000, true);

  swiperiftar.on('update', function() {
    console.log("after")
    swiperiftar.slideTo(0, 0, true);
   });
      
  
 


  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  
function countUp(el, end, duration,sign) {
  let start = 0;
  let current = start;
  const range = end - start;
  const increment = range / duration;
  let time = 0;
  const timer = setInterval(function () {
    time += 1; 
    current += increment;
    el.text(numberWithCommas(Math.round(current)));
    $("<sup>", {
            text:  sign
        }).appendTo(el);
    if (time >= duration) {
      clearInterval(timer);
      el.text(numberWithCommas(end));
      $("<sup>", {
        text:  sign
    }).appendTo(el);
    }
  }, 1); 
}


const typingobserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
   
    if( !entry.isIntersecting ) {
      var firstparo = new Typed('#first-par', {
        strings: [' '],
        typeSpeed: 1,
        showCursor: false,
        
      });
    }
    else
    var firstpar = new Typed('#first-par', {
      strings: [' ','Comitted to <br> Excellancy'],
      typeSpeed: 30,
      showCursor: false,
      
    });
  });
}, { threshold: 0.5 }); 

const typingobserverx = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
   
    if( !entry.isIntersecting ) {
      var secondparo = new Typed('#second-par', {
        strings: [' '],
        typeSpeed: 1,
        showCursor: false,
        
      });
    }
    else
    var secondpar = new Typed('#second-par', {
      strings: ['Lorem In <br> Excellancy'],
      typeSpeed: 30,
      showCursor: false,
      
    });
  });
}, { threshold: 0.5 }); 

const typingobservery = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
   
    if( !entry.isIntersecting ) {
      var thirdparo = new Typed('#third-par', {
        strings: [' '],
        typeSpeed: 1,
        showCursor: false,
        
      });
    }
    else
    var thirdpar = new Typed('#third-par', {
      strings: ['Flowing with <br> Excellancy'],
      typeSpeed: 30,
      showCursor: false,
      
    });
  });
}, { threshold: 0.5 }); 



// const togglepar = $("#first-par"); 
// const togglepary = $("#second-par");
// const toggleparx = $("#third-par");

// typingobserver.observe(togglepar[0]);
// typingobserverx.observe(togglepary[0]);
// typingobservery.observe(toggleparx[0]);


const itemobserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !togglecounting.hasClass("animated")) {
      countUp($("#gas-emissions"), 3271, 1000, "MT");
      countUp($("#gas-em"),124, 1000,"Gwh");
      countUp($("#gas-emission"), 3321, 1000,"MT");
      countUp($("#net"), 1.25, 1000,"MT");
      togglecounting.addClass("animated"); 
    }
  });
}, { threshold: 0.5 }); 



const togglecounting = $("#gas-emissions"); 
itemobserver.observe(togglecounting[0]);






  


  const reobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
      else{
        entry.target.classList.remove('visible');
      }
    });
  },

);

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
     
    }
    
  });
});



const arrowdown = document.querySelector('.arrow-down');

const carders = document.querySelectorAll(".carder");
const carder = document.querySelector('.carder')
const personalinfo = document.querySelector('.personal-info');

const personaltoggle = document.querySelector(".side-personal");
const personalsection = document.querySelector('.personal-section');
const personalx = document.querySelector('#close-personal');
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

const closequick = document.querySelector("#close-quick");
const quicksection = document.querySelector(".quick-section")
const quicktoggle = document.querySelector(".side-globe")
const date = document.querySelector(".date");

const closepoll = document.querySelector(".close-poll");
const pollsection = document.querySelector(".poll-section");
const polltoggle = document.querySelector(".side-poll");

const navlogo = document.querySelector('.nav-logo');

const navitems = document.querySelectorAll(".nav-link");
const eleventss = document.querySelectorAll(".event-content");
const eventers = document.querySelectorAll(".event")

const comittedpar = document.querySelectorAll('.comitted-par')
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

const heronav = document.querySelector('.hero-nav');

const blackoverlay = document.querySelector(".black-overlay");

const galleryrightbut = document.querySelector(".gallery-swipe-right");
const com = document.querySelector(".comitted-par");

gsap.to(".img-swiper",{

    scale:1.2,
    scrollTrigger:{
      trigger: ".emissioncontainer",
      start: "top 95%",
      scrub:1.5,
    }
}

)

// const pretl = gsap.timeline(
//   { defaults: { ease: "power1.out", duration: 1 },
//    },
 
// );

// pretl.to(".lightCyan-slider", {
//   x: " 100%",
//   duration: 0.8
// });

// pretl.to(
//   ".white-slider",
//   {
//     x: "0",
    
//   },
//   "-=1"
// );

// pretl.to(".hiderne", {
//   opacity: 1,
//   x: "0%",
//   duration: 3,
  
// });

// pretl.to(".preloader", {
//   x: "200%",
//   duration: 0.2,
//   onComplete: function() {
//     $(body).removeClass('active-nav'); // then only replace with blue div with new height and width
//   }
// });

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {

  var emissiontl = gsap.timeline({
    scrollTrigger:{
      trigger: '.emissioncontainer',
      start: 'top 95%',
    
    }
  })
  
  
  emissiontl.from(".unique-swiper-slide",{
      y:100,
      x:0,
      duration:0.5,
      opacity:0,
      delay:0.5,
      stagger:0.3,
      ease: "power3.out",
      
  })
  
  
  emissiontl.fromTo(".emission-next-but",{
      opacity:0,
  },{ opacity:1, duration: 0.2 },">0.5")
  

  //upcoming
  var upcomingtl = gsap.timeline({
    scrollTrigger:{
      trigger: '.upcoming-fluid',
      start: 'top 80%',
      
    }
  })
  
  upcomingtl.to(".carousel-whole-container",{
        y:0,
        duration:0.4,
        opacity:1,
        delay: 0.5,
        ease: "power3.out"
  })

  upcomingtl.to(".upcoming-events",{
    y:0,
    opacity:1,
    
  },">0.05")

  upcomingtl.to(".event-content",{
      
      y:0,
      opacity:1,
      stagger:0.2
  },">0.3")

  ///link gallery
  var linkstl = gsap.timeline({
    scrollTrigger:{
      trigger: '.galleryswiper',
  
      start: 'top bottom',
 
      
    }
  });
  
  linkstl.to(".link-swiper",
    { 
      y:0,
      delay:1,
      opacity: 1,
      stagger:0.2,
      ease: "power2.out",
    })
  
    linkstl.to(".swiper-button-next.carousel-upcoming-button.gallery-swipe-right",{
      autoAlpha: 1,
    },
    ">0.5"
    )
  
//media gallery animation

var mgallerytl = gsap.timeline({
  scrollTrigger:{
    
    trigger: '.title-row',
    start: 'top bottom',
    
  }
})

mgallerytl.to(".media-title",{
  y:0,
  opacity:1,

})

mgallerytl.fromTo(".title-row",{
  y:100,
  opacity:0,

},{y:0,
  opacity:1,})


mgallerytl.fromTo(".gallery-items",{
  y:100,
  opacity:0,
},{y:0,
  opacity:1,
  stagger:0.3,
duration:0.3},">0.1")



});
//^ For large screen animations


mm.add("(max-width: 800px)", () => {
//emission container swiper
var emissiontl = gsap.timeline({
  scrollTrigger:{
    trigger: '.emissioncontainer',
    start: 'top 95%',
  
  }
})


emissiontl.from(".unique-swiper-slide",{
    y:100,
    x:0,
    duration:0.5,
    opacity:0,
    delay:0.5,
    stagger:0.3,
    ease: "power3.out",
    
})


emissiontl.fromTo(".emission-next-but",{
    opacity:0,
},{ opacity:1, duration: 0.2 },">0.5")

//upcoming event anmation
gsap.to(".carousel-whole-container",{
  y:0,
  duration:0.5,
  opacity:1,
  delay: 0.5,
  ease: "power3.out",
  scrollTrigger:{
    trigger: '.upcoming-fluid',
    start: 'top 90%',
    
  }
})


var upcomingtl = gsap.timeline({
  scrollTrigger:{
    trigger: '.upcoming-events',
    start: 'top 80%',
    
  }
})


upcomingtl.to(".upcoming-events",{
    y:0,
    opacity:1,
  
},">-0.2")

upcomingtl.to(".event-content",{
    
    y:0,
    opacity:1,
    stagger:0.2
},">0.3")



//link gallery animation

var linkstl = gsap.timeline({
  scrollTrigger:{
    trigger: '.galleryswiper',
    start: 'top bottom',
    
  }
});

linkstl.to(".link-swiper",
  { 
    y:0,
    delay:1,
    opacity: 1,
    stagger:0.2,
    ease: "power2.out",
  })

  linkstl.to(".swiper-button-next.carousel-upcoming-button.gallery-swipe-right",{
    autoAlpha: 1,
  },
  ">0.5"
  )

//media gallery animation

var mgallerytl = gsap.timeline({
  scrollTrigger:{
    trigger: '.title-row',
    start: 'top bottom',
    
  }
})

mgallerytl.to(".media-title",{
  y:0,
  opacity:1,

})

mgallerytl.fromTo(".title-row",{
  y:100,
  opacity:0,
},
{y:0,
opacity:1,})


gsap.fromTo(".gallery-items",{
  
  y:100,
  opacity:0,
  stagger:0.9,
  
},{
  scrollTrigger:{
    trigger: '.gallery-items',
    start: 'top bottom',
    
  },
  delay:1,
  y:0,
  opacity:1,
  stagger:0.75,
})



})

gsap.fromTo(".iftar-swiper-button-prev",{ opacity:0},{opacity:0})

// mgallerytl.fromTo(".gallery-items",{
//   y:100,
//   opacity:0,

// },{y:0,
//   opacity:1,
//   stagger:0.3,
// duration:0.3},">0.1")

// srcollobserver.observe(carousel)

nobserver.observe(galleryrightbut)
nobserver.observe(menu)
nobserver.observe(footer)
// nobserver.observe(gallerymedia)
nobserver.observe(gallerytitle)
nobserver.observe(menuToggle)
nobserver.observe(navlogo);
nobserver.observe(carousel);
// nobserver.observe(upcomingevents);
// nobserver.observe(carouselcontroller)
nobserver.observe(date);



learnmore.forEach((el)=>reobserver.observe(el))
// comittedpar.forEach((el)=>reobserver.observe(el));
// gallery.forEach((el)=>nobserver.observe(el));
navitems.forEach((el)=>nobserver.observe(el));
// eleventss.forEach((el)=>nobserver.observe(el));
eventers.forEach((el)=>nobserver.observe(el));
// achevislide.forEach((el)=>nobserver.observe(el));
// swiperslide.forEach((el)=>nobserver.observe(el));


blackoverlay.addEventListener('click',function(){
  personalsection.classList.remove("active");
  pollsection.classList.remove("active");
  quicksection.classList.remove("active");

  personaltoggle.classList.remove("active");
    polltoggle.classList.remove("active");
    quicktoggle.classList.remove("active");

  blackoverlay.classList.remove("active");
})

personaltoggle.addEventListener('click',function(){
  if($(".personal-section").hasClass("active")){
    blackoverlay.classList.remove("active");
  }
  else{
    blackoverlay.classList.add("active");
  }

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
        blackoverlay.classList.remove("active");

        personalsection.classList.toggle("active");
        pollsection.classList.remove("active");
    quicksection.classList.remove("active");
        })
    

        quicktoggle.addEventListener('click',function(){
          if($(".quick-section").hasClass("active")){
            blackoverlay.classList.remove("active");
          }
          else{
            blackoverlay.classList.add("active");
          }
          
          quicktoggle.classList.toggle("active");
          personaltoggle.classList.remove("active");
          polltoggle.classList.remove("active");
         

          personalsection.classList.remove("active");
      
          pollsection.classList.remove("active");
          
          quicksection.classList.toggle("active");
          })

closequick.addEventListener('click',function(){
    quicktoggle.classList.toggle("active");
    polltoggle.classList.remove("active");
    personaltoggle.classList.remove("active");
    blackoverlay.classList.remove("active");

    quicksection.classList.toggle("active");
    pollsection.classList.remove("active");
    personalsection.classList.remove("active");
   
    })



    polltoggle.addEventListener('click',function(){
      if($(".poll-section").hasClass("active")){
        blackoverlay.classList.remove("active");
      }
      else{
        blackoverlay.classList.add("active");
      }  
      
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
            blackoverlay.classList.remove("active");
            
            pollsection.classList.toggle("active");
            personalsection.classList.remove("active");
            quicksection.classList.remove("active");
            })


   var alertdiv = document.querySelector(".alert-container");
        
        closealert.addEventListener('click', function(){
          alertdiv.classList.remove(`visible`);
          alerticon.classList.remove('visible');
      })
      

alerticon.addEventListener('click', function(){
    alertdiv.classList.toggle(`visible`);
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

  