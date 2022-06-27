const reviewsSlider = new Swiper('.reviews__slider', {
  wrapperClass: 'reviews__wrapper',
  slideClass: 'reviews__article',
  slideActiveClass: 'reviews__article_active',

  pagination: {
    el: '.reviews__slider-dots',
    type: 'bullets',
    bulletElement: 'li',
    bulletClass: 'slider-dots__button',
    bulletActiveClass: 'slider-dots__button_active',
    clickable: true,
  },

  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },

  centeredSlides: true,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  keyboard: true,
  grabCursor: true,
  loop: true,

  breakpoints: {
    718: {
      spaceBetween: 50,
    },
  },
});

const feedbackSlider = new Swiper('.feedback__slider', {
  wrapperClass: 'feedback__wrapper',
  slideClass: 'feedback__article',
  slideActiveClass: 'feedback__article_active',

  pagination: {
    el: '.feedback__slider-dots',
    type: 'bullets',
    bulletElement: 'li',
    bulletClass: 'slider-dots__button',
    bulletActiveClass: 'slider-dots__button_active',
    clickable: true,
  },

  navigation: {
    nextEl: '.feedback__button-next',
    prevEl: '.feedback__button-prev',
  },

  centeredSlides: true,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  keyboard: true,
  grabCursor: true,
  loop: true,

  breakpoints: {
    718: {
      spaceBetween: 30,
    },
  },
});
