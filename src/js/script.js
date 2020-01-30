svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){
  $('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    prevArrow: false,
    nextArrow: false
  });

  $('.slick-slider-teachers').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: false,
    prevArrow: $('.arrow-right'),
    nextArrow: $('.arrow-left'),

    responsive: [
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: 30
        }
      }
    ]
  });
 
  $(".main-nav__list").on("click","a", function(event) { 
      event.preventDefault(); 
      var id  = $(this).attr('href'); 
      var top = $(id).offset().top; 
      if ($(window).width() < 751) {
        $('body,html').animate({scrollTop: top - 100}, 500); 
      } else {
        $('body,html').animate({scrollTop: top - 40}, 500); 
      }
  }); 
});

  

