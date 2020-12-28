function createSlider(selector) {
  const sliderContainer = document.querySelector(`.${selector}__slider`);
  const slide = sliderContainer.querySelectorAll('.slider__slide');
  const next = sliderContainer.querySelector('.slider__arrow--next');
  const prev = sliderContainer.querySelector('.slider__arrow--prev');
  const pagination = document.querySelectorAll(`.${selector}__pagination`);

  let count = 0;

  slide[count].classList.add('slider__slide--active');
  pagination[count].classList.add(`${selector}__pagination--active`);

  function nextSlide() {
    slide[count].classList.remove('slider__slide--active');
    pagination[count].classList.remove(`${selector}__pagination--active`);
    count = (count < slide.length - 1) ? count + 1 : 0;
    slide[count].classList.add('slider__slide--active');
    pagination[count].classList.add(`${selector}__pagination--active`);
  }

  function prevSlide() {
    slide[count].classList.remove('slider__slide--active');
    pagination[count].classList.remove(`${selector}__pagination--active`);
    count = (count >= 1) ? count - 1 : slide.length - 1;
    slide[count].classList.add('slider__slide--active');
    pagination[count].classList.add(`${selector}__pagination--active`);
  }

  pagination.forEach((item, index) => {
    item.addEventListener('click', () => {
      slide[count].classList.remove('slider__slide--active');
      pagination[count].classList.remove(`${selector}__pagination--active`);
      count = index;
      slide[count].classList.add('slider__slide--active');
      pagination[count].classList.add(`${selector}__pagination--active`);
    });
  });

  function startSlider() {
    setInterval(nextSlide, 3000);
  }

  startSlider();
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
}

createSlider('hero');
createSlider('bankruptcy');
