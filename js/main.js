const btn = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const body = document.querySelector("#body");
const links = document.querySelectorAll(".navbar__link");
const cart = document.querySelector(".cart");
const getStartedbtn = document.querySelector(".header__btn");

btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  menu.classList.toggle("show");
  body.classList.toggle("hide");
});

for (let link of links) {
  console.log(link);
  link.addEventListener("click", function () {
    btn.classList.remove("open");
    menu.classList.remove("show");
    body.classList.remove("hide");
  });
}

cart.addEventListener("click", function () {
  btn.classList.remove("open");
  menu.classList.remove("show");
  body.classList.remove("hide");
});

getStartedbtn.addEventListener("click", function () {
  btn.classList.remove("open");
  menu.classList.remove("show");
  body.classList.remove("hide");
});
