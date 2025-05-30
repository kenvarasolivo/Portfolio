// Animate skill bars when visible on scroll
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  function animateSkills() {
    const skillsSection = document.getElementById('skills');
    if (isElementInViewport(skillsSection)) {
      skillsSection.classList.add('visible');
      window.removeEventListener('scroll', animateSkills);
    }
  }
  
  window.addEventListener('scroll', animateSkills);
  window.addEventListener('load', animateSkills);
  
  // Contact form handling
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
  });
  