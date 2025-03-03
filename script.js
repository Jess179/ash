// Add interactivity to the stars
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
  star.addEventListener('click', () => {
    const message = star.getAttribute('data-message');
    alert(message);
  });
});

// Crush button reveal
const crushButton = document.getElementById('crushButton');
const secretMessage = document.getElementById('secretMessage');

crushButton.addEventListener('click', () => {
  secretMessage.classList.remove('hidden');
});
