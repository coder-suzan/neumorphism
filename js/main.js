$(document).ready(function(){
  /* count up */
  $('.count-num').rCounter({
    duration: 30
  });

  //FILTER DATA--MIXITUP PLUGIN
	var mixer = mixitup("#container");

  /* tilt-card-effect */
VanillaTilt.init(document.querySelectorAll(".myCard"), {
  max: 25,
  speed: 4000,
  glare: true,
  "max-glare": 0.5, 
});
/* Initialize Swiper plugin */
    
   var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    cssMode: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });

});
