$(document).ready(function () {
  
  $(".homepage_slides").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"> </i>', '<i class="fa fa-angle-right"> </i>'],
    dots: true,
    //  autoplay: true,
//    dotData: true,
    dotsData:true,
  });
});