let viewport = document.documentElement.clientWidth;

let swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

let viewBoxes = function () {
    swiper.slideTo(0);
    if (viewport >= 1024) {
        swiper.disable();
    } else if (viewport < 1024 && viewport >= 768) {
        swiper.enable();
    } else {
        swiper.disable()
    }
};

viewBoxes();

window.addEventListener('resize', function() {
    viewport = document.documentElement.clientWidth;
    viewBoxes();
});

let button = document.querySelector('.button');

button.addEventListener('click', function() {
    let hiddenSlides = document.querySelectorAll('.hidden');
    for (let i = 0; i < hiddenSlides.length; i++) {
        hiddenSlides[i].classList.remove('hidden');
    }
    button.classList.add('hidden');
});