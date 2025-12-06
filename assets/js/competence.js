function animateCircle(circle, target) {
  let current = 0;
  const span = circle.querySelector('span');

  const step = () => {
    if (current <= target) {
      const angle = current * 3.6;
      circle.style.background = `conic-gradient(
        var(--first-color) ${angle}deg,
        var(--container-color) ${angle}deg
      )`;
      span.textContent = Math.round(current) + '%';
      current += 0.2; // incrément lent
      requestAnimationFrame(step);
    }
  };

  step();
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const circle = entry.target;
      const target = parseInt(circle.getAttribute('data-rate'), 10);
      animateCircle(circle, target);
      observer.unobserve(circle);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.ability-circle').forEach(circle => {
  observer.observe(circle);
});
