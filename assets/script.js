document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const links = document.querySelector('.links');

  if (menu && links) {
    menu.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('[data-category]');

  filters.forEach(button => {
    button.addEventListener('click', () => {
      filters.forEach(item =>
        item.classList.remove('active')
      );

      button.classList.add('active');

      const category = button.dataset.filter;

      cards.forEach(card => {
        card.hidden = !(
          category === 'all' ||
          card.dataset.category === category
        );
      });
    });
  });
});
