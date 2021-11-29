$(".testimonials-list").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  variableWidth: true,
  arrows: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./images/arrow-right.svg"/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg"/></button>`,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
      },
    },
  ],
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", function () {
  menu.classList.add("is-show");
});

window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("is-show");
  }
});
