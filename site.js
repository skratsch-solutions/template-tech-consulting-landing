tailwind.config = {
  theme: {
    extend: {
      colors: {
        midnight: '#0a1733', // Midnight blue
        coolgray: '#e5e7eb', // Cool gray
        teal: '#00ffe7',     // Electric teal
        sand: '#f5e9da',     // Soft sand
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
}

// Add client-side form validation for feedback
const form = document.querySelector('form[aria-label="Contact form"]');
const feedback = document.getElementById('form-feedback');
if (form && feedback) {
  form.addEventListener('submit', function(e) {
    feedback.classList.add('hidden');
    let valid = true;
    const name = form.querySelector('input[aria-label="Name"]');
    const email = form.querySelector('input[aria-label="Email"]');
    const message = form.querySelector('textarea[aria-label="Message"]');
    if (!name.value.trim()) {
      valid = false;
      feedback.textContent = 'Please enter your name.';
    } else if (!email.value.match(/^\S+@\S+\.\S+$/)) {
      valid = false;
      feedback.textContent = 'Please enter a valid email address.';
    } else if (!message.value.trim()) {
      valid = false;
      feedback.textContent = 'Please enter your message.';
    }
    if (!valid) {
      feedback.classList.remove('hidden');
      e.preventDefault();
    }
  });
}

// Navigation mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
}
// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a[href^="#"], #mobile-menu a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Back to Top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
// Animate hero and service cards on scroll (fade-in)
const fadeEls = document.querySelectorAll('header, #services > div, #about, .testimonials, .social-proof');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadein');
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));
