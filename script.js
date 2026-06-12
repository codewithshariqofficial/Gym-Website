// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close mobile menu when clicking a link
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Sticky Header on Scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for sticky header
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! Our team will contact you soon.');
        contactForm.reset();
    });
}

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Simple Scroll Reveal Animation
const revealElements = document.querySelectorAll('.feature-card, .class-card, .pricing-card, .contact-item');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

// Initial setup for reveal animation
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Run once on load
