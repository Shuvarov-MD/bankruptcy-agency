function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const headerContent = document.querySelector('.header__content');

  hamburger.classList.toggle('hamburger--active');
  headerContent.classList.toggle('header__content--active');
}

document.body.addEventListener('click', (event) => {
  const { target } = event;
  const headerContent = document.querySelector('.header__content');

  if (target.closest('.hamburger')) {
    toggleMenu();
  } else if (headerContent.classList.contains('header__content--active')
  && (!target.closest('.header__content') || target.closest('.header__item'))) {
    toggleMenu();
  }
});
