function closePopup() {
  const popupContentActive = document.querySelector('.popup__content--active');
  const popupWrapperActive = document.querySelector('.popup__wrapper--active');

  popupContentActive.classList.remove('popup__content--active');
  popupWrapperActive.classList.remove('popup__wrapper--active');
}

document.body.addEventListener('click', (event) => {
  const { target } = event;
  const popupWrapperActive = document.querySelector('.popup__wrapper');

  if (popupWrapperActive.classList.contains('popup__wrapper--active') && (target.closest('.popup__close') || !target.closest('.popup__content'))) {
    closePopup();
  }
});

document.body.addEventListener('keydown', event => {
  const popupWrapperActive = document.querySelector('.popup__wrapper');

  if (event.key === 'Escape' && popupWrapperActive.classList.contains('popup__wrapper--active')) {
    closePopup();
  }
});
