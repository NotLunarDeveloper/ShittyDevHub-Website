// Dynamic interactive cursor spotlight
document.addEventListener('DOMContentLoaded', () => {
  const spotlight = document.getElementById('spotlight');

  if (spotlight) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      spotlight.style.opacity = '1';
    });

    window.addEventListener('mouseleave', () => {
      spotlight.style.opacity = '0';
    });

    // Smooth lerp animation for the spotlight
    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      spotlight.style.left = `${currentX}px`;
      spotlight.style.top = `${currentY}px`;

      requestAnimationFrame(animate);
    };

    animate();
  }
});
