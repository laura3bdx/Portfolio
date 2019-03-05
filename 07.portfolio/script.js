'use strict';

// PLUGIN OWL CAROUSEL
$('.owl-carousel').owlCarousel({
      items:1,
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplaySpeed:500,
});

// AOS
AOS.init({
  duration: 400,
});

// PLUGIN TIMELINE
$('.js-timeline').Timeline({
      autoplay:true,
      mode:'vertical',
      itemClass:'box-item',
});
