let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

// Get the height of the viewport
const viewportHeight = window.innerHeight;

// Set maximum scroll value based on the viewport height to limit the scroll
const maxScroll = viewportHeight * 1.5; // Scroll limit (1.5x the height)

window.addEventListener('scroll', () => {
    // Get the current scroll value
    let value = window.scrollY;

    // Limit the scroll value to prevent endless scrolling
    if (value > maxScroll) {
        value = maxScroll;
    }

    // Adjust text position on scroll
    text.style.transform = `translateY(${value * 2}px)`;

    // Parallax effect for leaf
    leaf.style.transform = `translate(${value * 1.2}px, ${value * -1.2}px)`;

    // Parallax effect for hills
    hill5.style.transform = `translateX(${value * 1.5}px)`;
    hill4.style.transform = `translateX(${-value * 1.5}px)`;
    hill1.style.transform = `translateY(${value * 0.8}px)`;
});
