let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000); // Change image every 3 seconds
