"use strict";

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  $('.loader').hide(300);
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".header").addClass("js-scroll");
    } else {
      $(".header").removeClass("js-scroll");
    }
  });
  $('.header-menu').click(function () {
    $('header').toggleClass('active');
  });

  if ($('.hero-slider__main--wrapper').length > 0) {
    var startProgressbar = function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      tick = setInterval(interval, 10);
    };

    var interval = function interval() {
      if ($('.hero-slider__main--wrapper .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden") === "true") {
        progressBarIndex = $('.hero-slider__main--wrapper .slick-track div[aria-hidden="false"]').data("slickIndex");
        startProgressbar();
      } else {
        percentTime += 1 / (time + 5);
        $('.slider-counter__range--inner').css({
          height: percentTime + "%"
        });

        if (percentTime >= 100) {
          $('.single-item').slick('slickNext');
          progressBarIndex++;

          if (progressBarIndex > 2) {
            progressBarIndex = 0;
          }

          startProgressbar();
        }
      }
    };

    var resetProgressbar = function resetProgressbar() {
      $('.slider-counter__range--inner').css({
        height: 0 + '%'
      });
      clearInterval(tick);
    };

    if ($('.hero-slider__main--item').length <= 9) {
      $('.slider-counter__value span:last-child').html('0' + $('.hero-slider__main--item').length);
    } else {
      $('.slider-counter__value span:last-child').html($('.hero-slider__main--item').length);
    }

    if ($('.management-slider').length > 0) {
      $('.management-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 6000,
        dots: false,
        arrows: false,
        fade: true,
        pauseOnHover: false
      });
      $('.hero-slider__main--wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 6000,
        dots: false,
        arrows: false,
        pauseOnHover: false,
        asNavFor: '.management-slider'
      }).on("afterChange", function () {
        var index = Number($(this).find('.slick-current').attr('data-slick-index'));
        var index1 = index + 1;
        var length = $('.hero-slider__nav--wrapper .hero-slider__nav--item').length;
        $('.hero-slider__nav--item.slick-current').removeClass('slick-current');

        if (index > length) {
          $('.hero-slider__nav--wrapper').find('.hero-slider__nav--item').eq(0).addClass('slick-current');
        } else {
          $('.hero-slider__nav--wrapper').find('.hero-slider__nav--item').eq(index).addClass('slick-current');
        }

        if (index1 <= 9) {
          $('.slider-counter__value span:first-child').html('0' + index1);
        } else {
          $('.slider-counter__value span:first-child').html(index1);
        }
      }).on("afterChange", function () {
        var left = $('.slider-counter__value span:first-child').innerWidth() + 7;
        $('.slider-counter__range').css('left', left + 'px');
      });
      $('.hero-slider__nav--item').click(function () {
        if ($(this).hasClass('slick-current')) {} else {
          var slideno = $(this).index();
          $('.hero-slider__nav--item.slick-current').removeClass('slick-current');
          $(this).addClass('slick-current');
          $('.hero-slider__main--wrapper').slick('slickGoTo', slideno);
        }

        clearInterval(tick);
        startProgressbar();
      });
    } else {
      $('.hero-slider__main--wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 6000,
        dots: false,
        arrows: false,
        pauseOnHover: false
      }).on("afterChange", function () {
        var index = Number($(this).find('.slick-current').attr('data-slick-index'));
        var index1 = index + 1;
        var length = $('.hero-slider__nav--wrapper .hero-slider__nav--item').length;
        $('.hero-slider__nav--item.slick-current').removeClass('slick-current');

        if (index > length) {
          $('.hero-slider__nav--wrapper').find('.hero-slider__nav--item').eq(0).addClass('slick-current');
        } else {
          $('.hero-slider__nav--wrapper').find('.hero-slider__nav--item').eq(index).addClass('slick-current');
        }

        if (index1 <= 9) {
          $('.slider-counter__value span:first-child').html('0' + index1);
        } else {
          $('.slider-counter__value span:first-child').html(index1);
        }
      }).on("afterChange", function () {
        var left = $('.slider-counter__value span:first-child').innerWidth() + 7;
        $('.slider-counter__range').css('left', left + 'px');
      });
      $('.hero-slider__nav--item').click(function () {
        if ($(this).hasClass('slick-current')) {} else {
          var slideno = $(this).index();
          $('.hero-slider__nav--item.slick-current').removeClass('slick-current');
          $(this).addClass('slick-current');
          $('.hero-slider__main--wrapper').slick('slickGoTo', slideno);
        }

        clearInterval(tick);
        startProgressbar();
      });
    } //ticking machine


    var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;
    $('.progressBarContainer .progressBar').each(function (index) {
      var progress = "<div class='inProgress inProgress" + index + "'></div>";
      $(this).html(progress);
    });
    startProgressbar(); // End ticking machine
  }

  if ($('.services-slider__nav--wrapper').length > 0) {
    $('.services-slider__nav--wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 10000,
      dots: false,
      arrows: true,
      infinite: false,
      centerMode: true,
      centerPadding: '140px',
      pauseOnHover: false,
      responsive: [{
        breakpoint: 1440,
        settings: {
          centerPadding: '60px'
        }
      }, {
        breakpoint: 992,
        settings: {
          centerPadding: '0px',
          infinite: true,
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          centerPadding: '0px',
          infinite: true,
          slidesToShow: 1
        }
      }]
    }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var index = Number($(this).find('.slick-current').attr('data-slick-index')) + 2;
      var width = $(this).find('.slick-current').innerWidth() - $(this).find('.slick-current .services-slider__image').innerWidth();

      if (currentSlide === 0 && nextSlide === slick.$slides.length - 1) {
        $(this).find('.services-slider__nav--item .services-slider__image').css('transform', 'translateX(0)');
        $(this).find('.services-slider__nav--item').eq(index - 4).find('.services-slider__image').css('transform', 'translateX(' + width + 'px)');
      } else if (nextSlide > currentSlide || currentSlide === slick.$slides.length - 1 && nextSlide === 0) {
        $(this).find('.services-slider__nav--item .services-slider__image').css('transform', 'translateX(0)');
        $(this).find('.services-slider__nav--item').eq(index - 2).find('.services-slider__image').css('transform', 'translateX(' + width + 'px)');
      } else {
        $(this).find('.services-slider__nav--item .services-slider__image').css('transform', 'translateX(0)');
        $(this).find('.services-slider__nav--item').eq(index - 4).find('.services-slider__image').css('transform', 'translateX(' + width + 'px)');
      }
    });
    var width = $(this).find('.services-slider__nav--wrapper .slick-current').innerWidth() - $(this).find('.slick-current .services-slider__image').innerWidth();
    $('.services-slider__nav--wrapper .services-slider__nav--item[data-slick-index="-1"]').find('.services-slider__image').css('transform', 'translateX(' + width + 'px)');
  }

  if ($('.history-wrapper').length > 0) {
    $('.history-wrapper ').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 6000,
      dots: false,
      arrows: true,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }]
    }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var index = Number($(this).find('.slick-current').attr('data-slick-index')) + 2;
      var year = $(this).find('.history-item').eq(index).attr('data-year');
      $('.history-title span').html(year);
    });
    var index = Number($(this).find('.slick-current').attr('data-slick-index')) + 2;
    var year = $(this).find('.history-item').eq(index).attr('data-year');
    $('.history-title span').html(year);
  }

  $('.sertificates-wrapper').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 6000,
    dots: false,
    arrows: true,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 6
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 565,
      settings: {
        slidesToShow: 2
      }
    }]
  });
  $('a[href*="#"]') // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function () {});
      }
    }
  });
  $('.projects-hero__filter ul li').click(function () {
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    var filter = $(this).attr('data-filter');

    if (filter === 'all') {
      $('.projects-item').show();
    } else {
      $('.projects-item').hide();
      $('.projects-item[data-show="' + filter + '"]').show();
    }
  });

  if ($('.project-slider').length > 0) {
    $('.project-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 6000,
      dots: false,
      arrows: true,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px'
        }
      }]
    });
  }

  $('.accordion-item__title').click(function () {
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
    } else {
      $(this).parent().parent().find('.active').removeClass('active');
      $(this).parent().addClass('active');
    }
  });
});