import { annotate } from 'https://unpkg.com/rough-notation?module';

// Immediate circle annotation for the CV button
const cvButton = document.getElementById("cv");
const cvCircle = annotate(cvButton, {
  type: 'circle',
  color: 'blue',
  padding: 20,
  animationDuration: 2000
});
cvCircle.show();

// Helper function to observe and animate a group of elements
function observeAndAnnotate(selector, type, color = 'yellow') {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const effect = annotate(element, {
          type,
          color,
          padding: 5,
          animationDuration: 2000
        });
        effect.show();
        obs.unobserve(element); // only animate once
      }
    });
  }, {
    threshold: 0.6
  });

  elements.forEach(el => observer.observe(el));
}

// Apply to .highlight and .underline classes
observeAndAnnotate('.highlight', 'highlight', 'yellow');
observeAndAnnotate('.underline', 'underline', 'blue');