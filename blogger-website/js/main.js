// Sticky header effect (optional: add shadow on scroll)
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 30) {
        header.style.boxShadow = '0 4px 24px rgba(24,24,27,0.12)';
    } else {
        header.style.boxShadow = '';
    }
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlideFunc() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlideFunc);
    setInterval(nextSlide, 7000); // Auto-slide every 7s
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Social share dropdown
const shareBtn = document.getElementById('shareBtn');
const dropdownContent = document.getElementById('dropdownContent');
shareBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
});
document.addEventListener('click', function () {
    dropdownContent.style.display = 'none';
});