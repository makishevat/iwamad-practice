import './style.css';

const btn = document.querySelector('.like-btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('liked');
  btn.textContent = btn.classList.contains('liked') ? 'Liked' : 'Like';
});