$(document).ready(function(e) {
    var mySwiper = new Swiper ('.swiper-container', {
      centeredSlides: true,
      autoplay: 4000,
      speed: 600,
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });

    // Preloader
    $(window).on('load', function() {
      $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});

      $('.main-nav li a, .servicelink').bind('click',function(event){
        var $anchor = $(this);

        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 89
        }, 1500,'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        if ($(window).width() < 768 ) {
          $('.main-nav').hide();
        }
        event.preventDefault();
      });

      var $container = $('.portfolioContainer'),
          $body = $('body'),
          colW = 375,
          columns = null;


      $container.isotope({
        // disable window resizing
        resizable: true,
        masonry: {
          columnWidth: colW
        }
      });

      $(window).smartresize(function(){
        // check if columns has changed
        var currentColumns = Math.floor( ( $body.width() -30 ) / colW );
        if ( currentColumns !== columns ) {
          // set new column count
          columns = currentColumns;
          // apply width to container manually, then trigger relayout
          $container.width( columns * colW )
            .isotope('reLayout');
        }

      }).smartresize(); // trigger resize to set container width
      $('.portfolioFilter a').click(function(){
          $('.portfolioFilter .current').removeClass('current');
          $(this).addClass('current');

          var selector = $(this).attr('data-filter');
          $container.isotope({

              filter: selector,
           });
           return false;
      });
    });

    $('#about').scrollToFixed();
    $('.res-nav_click').click(function(){
        $('.main-nav').slideToggle();
        return false

    });

    $('#nrvbanner').click(function() {
      location.href = "http://www.limoshake.com/website/nrv.html";
    });

    $('#alabasterimg').click(function(event) {
      /* Act on the event */
      // $(this).toggleClass('min');
      $(this).toggleClass('max');
    });

    var wow = new WOW(
      {
        animateClass: 'animated',
        offset: 100,
        mobile: false
      }
    );
    wow.init();
});
