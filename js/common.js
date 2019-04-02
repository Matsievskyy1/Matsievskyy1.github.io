$(document).ready(function(){
  $(".list a").mPageScroll2id();
  $(".mouse_position a").mPageScroll2id();

  $(".owl-carousel").owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
       0:{
            items:1,
            nav:true
        },
        600:{
            items:3
        }
    }
});
});

