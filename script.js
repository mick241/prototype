{
    "pieces.cloudCapabilities"; "Blended",
    "pieces.telemetry"; true
}

// slider container

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Auto move slides every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);
