function trackScroll() {
  const arrowTop = document.querySelector('.arrow-top');
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    arrowTop.classList.add('arrow-top--active');
  }
  if (scrolled < coords) {
    arrowTop.classList.remove('arrow-top--active');
  }
}

window.addEventListener('scroll', trackScroll);
