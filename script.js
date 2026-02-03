// ==========================================
// Portfolio Website - JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
});

// ==========================================
// Navbar scroll effect
// ==========================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ==========================================
// Mobile menu toggle
// ==========================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

// ==========================================
// Smooth scroll for anchor links
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Scroll animations using Intersection Observer
// ==========================================
function initScrollAnimations() {
    // Elements to animate
    const animatedElements = document.querySelectorAll(
        '.section-title, .about-text, .detail-card, .skill-category, .project-card, .contact-item'
    );
    
    // Add fade-in class
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements
    animatedElements.forEach(el => observer.observe(el));
}

// ==========================================
// Active nav link highlighting
// ==========================================
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize active nav highlighting
initActiveNavHighlight();

// Initialize copy email functionality
initCopyEmail();

// ==========================================
// Copy email to clipboard
// ==========================================
function initCopyEmail() {
    const copyButtons = document.querySelectorAll('.copy-email-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const email = btn.dataset.email;
            
            try {
                await navigator.clipboard.writeText(email);
                
                // Show tooltip
                btn.classList.add('show-tooltip');
                
                // Hide tooltip after 2 seconds
                setTimeout(() => {
                    btn.classList.remove('show-tooltip');
                }, 2000);
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                textArea.style.position = 'fixed';
                textArea.style.left = '-9999px';
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Show tooltip
                btn.classList.add('show-tooltip');
                setTimeout(() => {
                    btn.classList.remove('show-tooltip');
                }, 2000);
            }
        });
    });
}
