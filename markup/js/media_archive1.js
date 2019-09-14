import '../scss/common.scss'
import '../scss/swiper.min.scss'
import '../scss/media_archive1.scss'
import Swiper from 'swiper';

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });