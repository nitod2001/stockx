//Sticky nav bar
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
  Menu.classList.remove("show");
  headerRightIcon.classList.remove("fa-times");
});
//Responsive navbar
const headerRightIcon = document.querySelector(".header-right-icon");
const Menu = document.querySelector(".header-right-menu");
headerRightIcon.addEventListener("click", function () {
  Menu.classList.toggle("show");
  headerRightIcon.classList.toggle("fa-times");
  console.log(headerRightIcon);
});
//Scroll down
window.addEventListener("scroll", function () {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 80;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});
