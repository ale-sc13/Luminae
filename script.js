// ANIMACIÓN AL HACER SCROLL
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.aparecer');
    const screenPosition = window.innerHeight;

    elements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;

        if (position < screenPosition - 100) {
            element.classList.add('visible');
        }
    });
});
// CAMBIO DE IMAGEN AL HACER HOVER
const imgs = document.querySelectorAll('.producto img');
const original = [];

imgs.forEach((img, i) => {
    original[i] = img.src;
    const hover = img.getAttribute('data-hover');

    img.addEventListener('mouseover', () => {
        img.src = hover;
    });

    img.addEventListener('mouseout', () => {
        img.src = original[i];
    });
});
