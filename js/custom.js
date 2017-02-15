$(document).ready(function() {
    $(window).load(function() {
      $('.spinner').hide();
      // $('#home .row').show();
    });

    $(window).scroll(function() {
        "use strict";
        var scroll = $(window).scrollTop();
        if (scroll > 60) {
            $(".header-transparent").addClass("sticky");
        } else {
            $(".header-transparent").removeClass("sticky");
        }

        $(".banner-inner, .newsletter-home-text").css("opacity", 1 - scroll / 350);
    });

    //parallax
    // if (!Modernizr.touch) {
    //   $('.home-newsletter').parallax("50%", 0.5);
    //      $('.home-contact').parallax("50%", 0.5);
    // }
    //backstretch background slideshow using for banner intro
    // $('.banner-slider').backstretch([
    //   "./images/bg.jpg"
    // ], {
    //   fade: 750,
    //   duration: 3000
    // });

    //smooth scroll
    $(function() {
        $('.scroll-to a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //Auto Close Responsive Navbar on Click
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function() {
                $('.navbar-collapse').collapse('hide');
            });
        } else {
            $('.navbar .navbar-default a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

    //wow animations
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        mobile: false, // trigger animations on mobile devices (true is default)
    });
    wow.init();

    $('#applyBtn').click(function() {
        location.href = "https://fa.fanqier.cn/f/dmfbzl";
    });

    var ts = new Date(2017, 01, 18);
    $('#countdown').countdown({
        timestamp: ts,
    });
});
