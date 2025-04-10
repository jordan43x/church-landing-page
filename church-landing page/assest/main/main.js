

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate value items on scroll
    const valueItems = document.querySelectorAll('.value-item');
    const eventItems = document.querySelectorAll('.event-item');

    const fadeInOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    };

    const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade-in');
                fadeInOnScroll.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    valueItems.forEach(item => {
        fadeInOnScroll.observe(item);
    });

    eventItems.forEach(item => {
        fadeInOnScroll.observe(item);
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     // Previous JavaScript remains the same

//     // Add slideshow functionality
//     const slides = document.querySelectorAll('.slide');
//     let currentSlide = 0;

//     function nextSlide() {
//         slides[currentSlide].classList.remove('active');
//         currentSlide = (currentSlide + 1) % slides.length;
//         slides[currentSlide].classList.add('active');
//     }

//     // Change slide every 5 seconds
//     setInterval(nextSlide, 5000);

//     // Rest of the JavaScript remains the same
// });