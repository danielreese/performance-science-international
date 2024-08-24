const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const announcementBar = document.querySelector(".announcement-content");
const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

announcementBar.addEventListener('mouseover', () => {
    announcementBar.style.animationPlayState = 'paused';
});

announcementBar.addEventListener('mouseout', () => {
    announcementBar.style.animationPlayState = 'running';
});

menuBtn.addEventListener("click", ()=> {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});