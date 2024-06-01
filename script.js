$('.multiple-card-slider .carousel').each(function(){
    var currentCarouselId = '#' + $(this).attr('id');
    const multipleItemCarousel = document.querySelector(currentCarouselId);

    if(window.matchMedia("(min-width:576px)").matches){
        const carousel = new bootstrap.Carousel(multipleItemCarousel, {
            interval: false,
            wrap: false
        })
        var carouselWidth = $(currentCarouselId + ' .carousel-inner')[0].scrollWidth;
        var cardWidth = $(currentCarouselId + ' .carousel-item').width();
        var scrollPosition = 0;    
        $(currentCarouselId + ' .carousel-upcoming-next-button').on('click', function(){
            
            if(scrollPosition <= (carouselWidth - (cardWidth * 4))){
                if(scrollPosition <= (carouselWidth - (cardWidth * 4.5))){
                document.querySelector('.carousel-upcoming-next-button').style.display = "flex";
                document.querySelector('.carousel-upcoming-prev-button').style.display = "flex";
                }
                console.log('next');
                scrollPosition = scrollPosition + cardWidth;
                $(currentCarouselId + ' .carousel-inner').animate({scrollLeft: scrollPosition},600);
            }
            else{
                document.querySelector('.carousel-upcoming-next-button').style.display = "none";
            }
        });
        $(currentCarouselId + ' .carousel-upcoming-prev-button').on('click', function(){
            if(scrollPosition > cardWidth/2){
                document.querySelector('.carousel-upcoming-prev-button').style.display = "flex";
                document.querySelector('.carousel-upcoming-next-button').style.display = "flex";
                console.log('prev');
                scrollPosition = scrollPosition - cardWidth;
                $(currentCarouselId + ' .carousel-inner').animate({scrollLeft: scrollPosition},600);
            }
            else if(scrollPosition<=(cardWidth * 5)){
                document.querySelector('.carousel-upcoming-prev-button').style.display = "none";
            }
        });
    }
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
          slidesPerView: 1,
          grid: {
            rows: 1,
          },
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            grid: {
                rows: 1,
              },
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        1200: {
            grid: {
                rows: 2,
              },
          slidesPerView: 4.3,
          spaceBetween: 40
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
          spaceBetween: 20
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
  



const arrowdown = document.querySelector('.arrow-down');
const personalinfo = document.querySelector('.personal-info');
const personaltoggle = document.querySelector(".side-personal");
const personalsection = document.querySelector('.personal-section');
const personalx = document.querySelector('.close-personal');
const menu = document.getElementById('nav-menu');
const menuToggle = document.getElementById('nav-menu-toggle');
const menuClose = document.getElementById('nav-menu-close');
searchicon = document.querySelector('.search-logo');
searchbar = document.querySelector('#search');
alerticon = document.querySelector('.alert-icon-div');
alertparagraph = document.querySelector('.alert-paragraph');

const closequick = document.querySelector(".close-quick");
const quicksection = document.querySelector(".quick-section")
const quicktoggle = document.querySelector(".side-globe")

const closepoll = document.querySelector(".close-poll");
const pollsection = document.querySelector(".poll-section");
const polltoggle = document.querySelector(".side-poll");




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
    
        personalinfo.classList.toggle("active");
        })
        

alerticon.addEventListener('click', function(){
    alertparagraph.classList.toggle(`visible`);
    alerticon.classList.toggle('visible');
})

menuToggle.addEventListener('click', function() {
    menu.classList.add('active');
});

menuClose.addEventListener('click', function() {
    menu.classList.remove('active');
});


searchicon.addEventListener(`click`, function() {
    searchbar.classList.toggle(`show-search`);
  });

  