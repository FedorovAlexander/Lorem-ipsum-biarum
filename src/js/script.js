svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){
  $('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
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
    nextArrow: $('.arrow-left')
  });
});

  

