const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// JavaScript
const images = document.querySelectorAll('.carrusel-img');
let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

// Botones manuales
document.getElementById('prev').onclick = () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
};

document.getElementById('next').onclick = () => {
  current = (current + 1) % images.length;
  showImage(current);
};

// Movimiento automático
setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 3000); // Cambia cada 3 segundos