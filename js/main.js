let menuBtn = document.querySelector(".header__burger");
let nav = document.querySelector(".menu__list");
let links = document.querySelectorAll(".menu__link");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("open");
});

if (window.innerWidth <= 610) {
  links.forEach((link) => {
    link.addEventListener("click", function () {
      menuBtn.classList.toggle("open");
      nav.classList.toggle("open");
    });
  });
}
