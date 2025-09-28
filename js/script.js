const cursorLight = document.querySelector('.cursor-light');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;
const ease = 0.18;

document.body.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

document.body.addEventListener('mouseleave', () => {
  cursorLight.style.opacity = '0';
});
document.body.addEventListener('mouseenter', () => {
  cursorLight.style.opacity = '0.4';
});

function animate() {
  currentX += (mouseX - currentX) * ease;
  currentY += (mouseY - currentY) * ease;
  cursorLight.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
