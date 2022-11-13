/* Responsive Menu */
const Menu = document.querySelector(".header-right-menu");
const headerIcon = document.querySelector(".header-right-icon");

headerIcon.addEventListener("click", function () {
  Menu.classList.toggle("show");
});
/*Scroll top */
var scroll = document.querySelector(".scrollTop");

window.addEventListener("scroll", function () {
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrolltoTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
/*Scroll down */
window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});
