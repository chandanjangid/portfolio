let currentIndex = 0;
function navigateSlide(index) {
    const slidesContainer = document.querySelector('.slides-container');
    slidesContainer.style.transform = `translateX(-${index * 100}vw)`;
    currentIndex = index;
}
function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (currentIndex < slides.length - 1) {
        navigateSlide(currentIndex + 1);
    }
}
function prevSlide() {
    if (currentIndex > 0) {
        navigateSlide(currentIndex - 1);
    }
}