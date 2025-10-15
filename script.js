document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for your message!');
});