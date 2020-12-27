function createPopupImage(src, alt) {
  const popupContent = document.querySelector('.popup__content--successes');
  const popupImage = document.createElement('img');

  if (popupContent.querySelector('.popup__img')) {
    removePopupImage();
  }

  popupImage.classList.add('popup__img');
  popupImage.src = src;
  popupImage.alt = alt;
  popupContent.append(popupImage);
}
