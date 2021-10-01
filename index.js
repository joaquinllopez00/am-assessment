const handleResize = () => {
  let mobileNavLinks = document.querySelector(".nav-links");

  if (window.innerWidth < 1150 && !mobileNavLinks.classList[2]) {
    mobileNavLinks.classList.remove("desktop");
    mobileNavLinks.classList.add("mobile");
  } else if (window.innerWidth > 1150 && mobileNavLinks.classList[1] === "mobile") {
    mobileNavLinks.classList.remove("mobile");
    mobileNavLinks.classList.add("desktop");
  }
};

const handleNavToggle = () => {
  let navLines = document.querySelectorAll(".bun");
  let navLinks = document.querySelector(".nav-links");

  navLines[0].classList.toggle("toggled");
  navLines[1].classList.toggle("hidden");

  navLines[2].classList.toggle("toggled");

  navLinks.classList.toggle("toggled");
};

window.addEventListener("resize", handleResize);
