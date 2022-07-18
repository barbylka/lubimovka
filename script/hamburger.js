const body = document.querySelector(".body");
const hamburgerButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".topnav__menu");
const navLink = document.querySelectorAll(".topnav__item-link");
let navMenuOpened = false;

function stopPageScroll() {
  console.log("here");
  navMenuOpened = !navMenuOpened;
  if (navMenuOpened && window.innerWidth < 1280) {
    body.style.overflowY = "hidden";
    navMenuOpened = true;
    return false;
  } else {
    navMenuOpened = false;
    body.style.overflowY = "scroll";
    return false;
  }
}

function toggleNavMenu() {
  hamburgerButton.classList.toggle("opened");
  navMenu.classList.toggle("opened");
  stopPageScroll(navMenuOpened);
}

function closeMenu() {
  hamburgerButton.classList.remove("opened");
  navMenu.classList.remove("opened");
  stopPageScroll(navMenuOpened);
}

function allowScroll() {
  if (window.innerWidth >= 1280 && navMenuOpened) closeMenu();
}

window.onresize = allowScroll;

hamburgerButton.addEventListener("click", toggleNavMenu);
navLink.forEach((link) => link.addEventListener("click", closeMenu));
