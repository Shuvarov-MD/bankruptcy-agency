function createCarousel() {
  const sliderContainer = document.querySelector('.successes__slider');
  const sliderWrapper = sliderContainer.querySelector('.slider__wrapper');
  const slide = sliderContainer.querySelectorAll('.slider__slide');
  const next = sliderContainer.querySelector('.slider__arrow--next');
  const prev = sliderContainer.querySelector('.slider__arrow--prev');

  let count;

  if (document.documentElement.clientWidth >= 991) {
    count = 3;
  } else if (document.documentElement.clientWidth >= 575
    && document.documentElement.clientWidth < 991) {
    count = 2;
  } else {
    count = 1;
  }

  let translate = 0;
  let currentCount = 0;
  const step = slide.length - count;

  slide.forEach((item) => {
    item.classList.add('slider__slide--active');
  });

  function nextSlide() {
    if (currentCount < step) {
      currentCount += 1;
      translate += sliderWrapper.clientWidth / count;
    } else {
      currentCount = 0;
      translate = 0;
    }

    sliderWrapper.style.transform = `translateX(-${translate}px)`;
  }

  function prevSlide() {
    if (currentCount === 0) {
      currentCount = step;
      translate = (sliderWrapper.clientWidth * step) / count;
    } else {
      currentCount -= 1;
      translate -= sliderWrapper.clientWidth / count;
    }

    sliderWrapper.style.transform = `translateX(-${translate}px)`;
  }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
}

createCarousel();
