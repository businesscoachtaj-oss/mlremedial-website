// M.L Remedial — shared site behavior
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // Highlight current page in nav
  var here = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Footer year
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
