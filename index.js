const overviewTrigers = document.querySelectorAll('.js-open-overview');

if (overviewTrigers.length > 0) {
  overviewTrigers.forEach((overviewTriger) => {
    overviewTriger.addEventListener('mouseenter', (event) => {
      const overview = event.target.nextElementSibling;
      overview.classList.add('show');
    });

    overviewTriger.addEventListener('mouseleave', (event) => {
      const overview = event.target.nextElementSibling;
      overview.classList.remove('show');
    });
  });
}