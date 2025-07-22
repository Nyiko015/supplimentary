// script.js

document.addEventListener('DOMContentLoaded', function () {
    // ===== Button Click Alerts =====
    const loginBtn = document.querySelector('.btn.login');
    const signupBtn = document.querySelector('.btn.signup');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Login feature coming soon. Stay tuned!');
        });
    } else {
        console.warn('Login button not found.');
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            alert('Sign up feature coming soon. Get ready to join TradeMaster!');
        });
    } else {
        console.warn('Signup button not found.');
    }

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== Highlight Static Active Navigation Links =====
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // ===== Sticky Header with Throttled Scroll Event =====
    const header = document.querySelector('header');
    let ticking = false;

    function handleStickyHeader() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(handleStickyHeader);
            ticking = true;
        }
    });

    // ===== Active Link Highlighting Based on Section Scroll =====
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);

            if (
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight &&
                navLink
            ) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(highlightNavOnScroll);
            ticking = true;
        }
    });
});
// ===== Enif (sections.length > 0) {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(highlightNavOnScroll);
            ticking = true;
        }
    });

    // ===== End of script.js =====