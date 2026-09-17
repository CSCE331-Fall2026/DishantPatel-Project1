var design2 = localStorage.getItem('design2') == 'true';

// tag the html element with the page name so the css can tell the pages apart
var page = location.pathname.split('/').pop();
if (page == 'portfolio.html') {
  document.documentElement.className = 'portfolio';
} else if (page == 'activities.html') {
  document.documentElement.className = 'activities';
} else {
  document.documentElement.className = 'home';
}

// swap the stylesheet before the page draws so it doesn't flash
document.getElementById('stylesheet').href = design2 ? 'style2.css' : 'style.css';

function toggleDesign() {
  design2 = !design2;
  localStorage.setItem('design2', design2);
  document.getElementById('stylesheet').href = design2 ? 'style2.css' : 'style.css';
  document.querySelector('.design-toggle').textContent = design2 ? 'Design 1' : 'Design 2';
  if (design2) {
    addMenu();
  } else {
    removeMenu();
  }
}

// design 2 uses a hamburger menu on every page except home
function addMenu() {
  if (page == 'index.html' || page == '') return;

  var nav = document.querySelector('nav');

  nav.insertAdjacentHTML('afterbegin', '<div class="nav-brand"><h1>Dishant Patel</h1><p>Computer Science Student</p></div>');
  nav.querySelector('.container').insertAdjacentHTML('beforeend', '<a href="https://www.linkedin.com/in/dishantpatel3/" class="nav-linkedin">LinkedIn</a>');
  document.body.insertAdjacentHTML('beforeend',
    '<button class="menu-toggle"><span></span><span></span><span></span><b>X</b></button>' +
    '<div class="nav-overlay"></div>');

  var btn = document.querySelector('.menu-toggle');
  var overlay = document.querySelector('.nav-overlay');

  btn.onclick = function () {
    nav.classList.toggle('active');
    btn.classList.toggle('open');
    overlay.classList.toggle('active');
  };
  overlay.onclick = btn.onclick;
}

function removeMenu() {
  var extras = document.querySelectorAll('.nav-brand, .nav-linkedin, .menu-toggle, .nav-overlay');
  for (var i = 0; i < extras.length; i++) {
    extras[i].remove();
  }
  document.querySelector('nav').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.design-toggle');
  toggle.textContent = design2 ? 'Design 1' : 'Design 2';
  toggle.onclick = function (e) {
    e.preventDefault();
    toggleDesign();
  };
  if (design2) {
    addMenu();
  }
});
