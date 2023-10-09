const navItems = document.getElementById("nav-items");
const nav = document.getElementById("main-nav");
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("hamburger");
    const navItems = document.getElementById("nav-items");

    navToggle.addEventListener("click", function () {
        navItems.classList.toggle("hide-small");
    });
});
