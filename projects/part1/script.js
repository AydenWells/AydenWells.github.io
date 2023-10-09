const navItems = document.getElementById("nav-items");
const nav = document.getElementById("main-nav");
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("hamburger");
    const navItems = document.getElementById("nav-items");

    navToggle.addEventListener("click", function () {
        navItems.classList.toggle("hide-small");
    });
});


const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};
window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;}