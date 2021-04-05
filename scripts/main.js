$(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
  if (!$(this).next().hasClass("show")) {
    $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass("show");

  $(this)
    .parents("li.nav-item.dropdown.show")
    .on("hidden.bs.dropdown", function (e) {
      $(".dropdown-submenu .show").removeClass("show");
    });

  return false;
});


// Header style on scroll
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scroll-active", windowPosition);
});

// Implement Counter
const counters = document.querySelectorAll(".counter");
const speed = 590;

counters.forEach((count) => {
  const updateCounter = () => {
    const ourTarget = +count.getAttribute("data-target");
    const ourCounter = +count.innerText;
    const increment = ourTarget / speed;

    if (ourCounter < ourTarget) {
      count.innerText = (ourCounter + increment).toFixed(2);
      setTimeout(updateCounter, 1);
    } else {
      count.innerText = ourTarget;
    }
  };
  updateCounter();
});
