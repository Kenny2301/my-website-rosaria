// ===== FIXED RESPONSIVE CAROUSEL =====

// Select elements
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
const slides = document.querySelectorAll('.carousel-card');
const menuToggle = document.getElementById("menu-toggle");
const navlinks = document.getElementById("navlinks");

let index = 0;

// Dynamically detect visible cards based on screen width
function getVisibleCards() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 600) return 2;
    if (window.innerWidth <= 900) return 3;
    if (window.innerWidth <= 1100) return 4;
    return 5; // default (desktop)
}

// Update carousel position
function updateCarousel() {
    const slideWidth = slides[0].offsetWidth + 20; // include gap
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Next button
nextBtn.addEventListener('click', () => {
    const visibleCards = getVisibleCards();
    const totalSlides = slides.length;

    if (index < totalSlides - visibleCards) {
        index++;
    } else {
        index = 0; // loop back
    }
    updateCarousel();
});

// Prev button
prevBtn.addEventListener('click', () => {
    const visibleCards = getVisibleCards();
    const totalSlides = slides.length;

    if (index > 0) {
        index--;
    } else {
        index = totalSlides - visibleCards; // loop to end
    }
    updateCarousel();
});

// Handle window resize
window.addEventListener('resize', updateCarousel);




menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navlinks.classList.toggle("active");
});
