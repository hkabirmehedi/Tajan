$(function () {
    //banner slider
  $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    //video
    $('.venobox').venobox();
    
    //menu-scrollinf
    $(window).scroll(function(){
        var scrooling = $(this).scrollTop();
        if(scrooling > 500){
            $('.navbar').addClass ('bg');
        }
        else{
             $('.navbar').removeClass('bg');
        }
        if(scrooling > 200){
            $ ('.back-top ').fadeIn(500);
        }
        else {
            $('.back-top ').fadeOut(500);
        }
    });
    //team slider
    
     $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
        

    });
      //feedback slider
  $('.feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
});
