const toggleBtn = document.getElementById('themeToggle');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

function updateIcon() {
  if(document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️'; // sun for light mode
  } else {
    toggleBtn.textContent = '🌙'; // moon for dark mode
  }
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  updateIcon();
});

// Navbar toggle on mobile
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// initialize correct icon on page load
updateIcon();
