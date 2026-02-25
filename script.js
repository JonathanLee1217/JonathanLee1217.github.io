// ── Typing animation ──
const titles = ['Software Engineer', 'AI Engineer', 'Full-Stack Developer'];
let ti = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-text');
function type() {
  const current = titles[ti];
  if (!deleting) {
    el.textContent = current.slice(0, ++ci);
    if (ci === current.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = current.slice(0, --ci);
    if (ci === 0) { deleting = false; ti = (ti + 1) % titles.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// ── Navbar scroll ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 40);
  // active link
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ── Hamburger ──
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('nav-links').classList.remove('open'));
});

// ── EmailJS Contact Form ──
// To activate: replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY'
// with your actual EmailJS credentials at https://www.emailjs.com
emailjs.init('YOUR_PUBLIC_KEY');
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.className = 'form-status';
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      status.textContent = 'Message sent successfully! I will get back to you soon.';
      status.className = 'form-status success';
      this.reset();
    })
    .catch(() => {
      status.textContent = 'Something went wrong. Please email me directly at jluwcs@gmail.com.';
      status.className = 'form-status error';
    });
});

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-category, .project-card, .stat-box').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
