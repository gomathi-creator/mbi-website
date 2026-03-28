console.log("JS LOADED");

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    console.log("CLICKED");
    navMenu.classList.toggle("active");
});

const philosophy = document.querySelector(".philosophy-text");

window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight * 0.85;
    const sectionTop = philosophy.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
        philosophy.classList.add("show");
    }
});
const serviceTexts = document.querySelectorAll(".service-text");

window.addEventListener("scroll", () => {

    serviceTexts.forEach((text) => {
        const triggerPoint = window.innerHeight * 0.85;
        const top = text.getBoundingClientRect().top;

        if (top < triggerPoint) {
            text.classList.add("show");
        }
    });

});
