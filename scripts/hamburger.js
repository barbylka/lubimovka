const hamburgerButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".top-nav__menu");
const navLink = document.querySelectorAll(".top-nav__item");

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
