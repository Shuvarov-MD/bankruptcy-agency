function showPopup(selector) {
  const popupCallback = document.querySelector(`.popup__content--${selector}`);
  const popupWrapper = document.querySelector('.popup__wrapper');

  popupCallback.classList.add('popup__content--active');
  popupWrapper.classList.add('popup__wrapper--active');
}

document.body.addEventListener('click', (event) => {
  const { target } = event;
  const popupContent = document.querySelector('.popup__content');

  event.preventDefault();

  if (target.closest('.callback')) {
    showPopup('callback');
  } else if (target.closest('.personal-data')) {
    if (popupContent.classList.contains('popup__content--active')) closePopup();

    showPopup('personal-data');
  } else if (target.closest('.successes__wrap')) {
    const { src } = target.querySelector('.successes__img');
    const { alt } = target.querySelector('.successes__img');

    createPopupImage(src, alt);
    showPopup('successes');
  }
});
