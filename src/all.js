// Auto set QUALITY height

// window.addEventListener("resize", function () {
//   shape = document.querySelector(".quality__img1 img");
//   qualityBlock = document.querySelector(".quality");
//   qualityBlock.style.maxHeight = shape.clientHeight;
//   console.log("shape" + shape.clientHeight)
//   console.log("block" + qualityBlock.clientHeight)
// });


// Hamburger Animation
let hamburger = document.querySelector(".menu-hamburger");
let lines = document.querySelectorAll(".menu-hamburger__lines");
let menu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  // lines.classList.toggle("open");
  menu.classList.remove("container")
  lines.forEach(line => line.classList.toggle("open"));
  menu.classList.toggle("open");
});

// Back to top
let toTop = document.querySelector(".to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

toTop.addEventListener("click", topFunction)