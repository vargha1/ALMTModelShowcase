const main = document.querySelector('main');

main.addEventListener('wheel', (event) => {
  event.preventDefault(); // Prevent default vertical scroll

  // Scroll horizontally based on the vertical scroll amount
  main.scrollLeft += event.deltaY * 4;

  // Ensure smooth snapping behavior
  main.style.scrollSnapType = 'x mandatory'; // Ensure snapping is enabled
  main.style.scrollBehavior = 'smooth'; // Smooth scroll behavior
});