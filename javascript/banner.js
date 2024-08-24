const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;

function autoScrollCarousel() {
    currentIndex++;

    if (currentIndex >= slides.length) {
        // Smoothly reset the carousel to the first slide
        carousel.style.transition = 'none'; // Temporarily disable the transition
        carousel.style.transform = `translateX(0px)`; // Reset to the first image
        currentIndex = 0;

        // Re-enable the transition after a slight delay
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    } else {
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
}

        setInterval(autoScrollCarousel, 3000); // Auto-scrolls every 3 seconds