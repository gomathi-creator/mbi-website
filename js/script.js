console.log("JS LOADED");

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    console.log("CLICKED");
    navMenu.classList.toggle("active");
});
