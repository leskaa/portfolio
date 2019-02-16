import SmoothScroll from 'smooth-scroll';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('down-arrow').addEventListener('click', () => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1400,
      easing: 'easeInOutQuad'
    });
  });
});
