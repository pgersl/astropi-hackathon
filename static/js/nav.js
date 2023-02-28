const toggleButton = document.querySelector('.toggle');
const linksContainer = document.querySelector('.links');

toggleButton.addEventListener('click', () => {
  linksContainer.classList.toggle('show');
});