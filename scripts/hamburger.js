const hamburgerButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".topnav__menu");
const navLink = document.querySelectorAll(".topnav__item");

function toggleNavMenu() {
  hamburgerButton.classList.toggle("opened");
  navMenu.classList.toggle("opened");
}

function closeMenu() {
  console.log('here: ', );
  hamburgerButton.classList.remove("opened");
  navMenu.classList.remove("opened");
}

hamburgerButton.addEventListener("click", toggleNavMenu);
navLink.forEach(link => link.addEventListener("click", closeMenu));
