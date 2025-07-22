// script.js
document.addEventListener('DOMContentLoaded', function () {
    // ===== AOS Initialization =====
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }

    // ===== Login & Signup Alerts =====
    const loginBtn = document.querySelector('.btn.login');
    const signupBtn = document.querySelector('.btn.signup');

    loginBtn?.addEventListener('click', () => {
        alert('Login feature coming soon. Stay tuned!');
    });

    signupBtn?.addEventListener('click', () => {
        alert('Sign up feature coming soon. Get ready to join TradeMaster!');
    });

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ===== Sticky Header on Scroll =====
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header?.classList.add('sticky');
        } else {
            header?.classList.remove('sticky');
        }
    });

    // ===== Highlight Current Nav Link =====
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // ===== Contact Form Validation =====
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Your message has been sent successfully!');
            contactForm.reset();
        });
    }

    // ===== Mobile Navigation Toggle =====
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle?.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !expanded);
        navMenu?.classList.toggle('active');
    });

    // ===== Close Nav Menu on Link Click =====
    navMenu?.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    // ===== Close Nav Menu on Outside Click =====
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // ===== ARIA & Keyboard Support =====
    navToggle?.setAttribute('aria-label', 'Toggle navigation menu');
    navMenu?.setAttribute('role', 'navigation');

    const ariaLive = document.createElement('div');
    ariaLive.classList.add('sr-only');
    ariaLive.setAttribute('role', 'alert');
    ariaLive.setAttribute('aria-live', 'assertive');
    document.body.appendChild(ariaLive);

    navLinks.forEach(link => {
        link.setAttribute('role', 'menuitem');
        link.setAttribute('aria-label', link.textContent);
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            ariaLive.textContent = `Navigated to ${link.textContent}`;
        });
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    });
});
