"use strict";

var burger = document.querySelector('.burger'),
    header = document.querySelector('.header'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    popup = document.querySelector('.popup'),
    popupBody = document.querySelector('.popup__body'),
    select = document.querySelector('.select'),
    city = document.querySelector('.select__city'),
    formButton = document.querySelector('.first-form__button'),
    sliderButton = document.querySelector('.slider__button'),
    sliderButtonLeft = document.querySelector('.slider__button-left'),
    sliderButtonRight = document.querySelector('.slider__button-right'),
    video = document.querySelector('.video'),
    videoFile = document.querySelector('video');
window.addEventListener('load', function () {
  if (sliderButton) {
    var goSlide = function goSlide(e) {
      // alert('Click Button')
      if (e.target.closest('.slider__button-left')) {
        _swiper.slidePrev(500, false);
      }

      if (e.target.closest('.slider__button-right')) {
        _swiper.slideNext(500, false);
      }
    };

    var _swiper = new Swiper('.swiper', {
      loop: true,
      // centeredSlides: true,
      slideToClickedSlide: true,
      slidesPerView: 2 // autoplay: {
      // 	delay: 4000,
      // 	stopOnLastSlide: false,
      // 	disableOnIteraction: false,
      // }
      // 		swiper.on( событие , обработчик )	
      // Добавить обработчик событий
      // swiper.onAny( обработчик )	
      // Добавить прослушиватель событий, который будет запускаться для всех событий

    });

    sliderButton.addEventListener('click', goSlide);
  }

  if (video) {
    var toggleVideo = function toggleVideo(e) {
      if (e.target.closest('.video')) {
        video.classList.toggle('active');
        videoFile.setAttribute('controls', true);
      }
    };

    video.addEventListener('click', toggleVideo);
  } // body.addEventListener('click', clickBody)
  // function clickBody() {
  // 	alert("Click Body") // Для проверки вызова функции кликом
  // }


  body.addEventListener('click', toggle);

  function toggle(e) {
    // alert("Click Body") // Для проверки вызова функции кликом
    if (e.target.closest('.burger')) {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      header.classList.toggle('active');
      body.classList.toggle('lock');
    } else if (!e.target.closest('.burger')) {
      burger.classList.remove('active');
      menu.classList.remove('active');
      header.classList.remove('active');
      body.classList.remove('lock');
    }

    if (e.target.closest('.first-form__button')) {
      e.preventDefault();
      popup.classList.add('active');
      body.classList.add('lock');
      popup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__body') || e.target.closest('.popup__close')) {
          popup.classList.remove('active');
          body.classList.remove('lock');
        }
      });
    }

    if (e.target.closest('.select')) {
      select.classList.toggle('active');
    }

    if (!e.target.closest('.select')) {
      select.classList.remove('active');
    }

    if (e.target.closest('.slider__button-left')) {
      swiper.slidePrev(500, false);
    }

    if (e.target.closest('.slider__button-right')) {
      swiper.slideNext(500, false);
    }
  }
});