//No Global Variables outside of function names

//handles resize + toggles classes for mobile nav
const handleResize = () => {
  let mobileNavLinks = document.querySelector(".nav-links");
  if (window.innerWidth < 1150 && mobileNavLinks.classList[1] !== "mobile") {
    mobileNavLinks.classList.remove("desktop");
    mobileNavLinks.classList.add("mobile");
  } else if (window.innerWidth > 1150 && mobileNavLinks.classList.contains("mobile")) {
    mobileNavLinks.classList.remove("mobile");
    mobileNavLinks.classList.add("desktop");
  }
};

//function to apply src on supplied element based on src provided
//Default case sets src back to empty string to keep videos from playing when hidden
//Default source param falls to default so function can be called to set src back to an empty string
const handleSrc = (el, source = "") => {
  switch (source) {
    case "vp":
      el.src = "https://www.youtube.com/embed/98Sxz06bc9k";
      break;
    case "sm":
      el.src = "https://www.youtube.com/embed/0trAMd1GYVc";
      break;
    case "em":
      el.src = "https://www.youtube.com/embed/_6PSL2F1UCY";
      break;
    case "wd":
      el.src = "https://www.youtube.com/embed/_KN82Q7U9oI";
      break;
    case "gd":
      el.src = "https://www.youtube.com/embed/suh91YIne4U";
      break;
    default:
      el.src = "";
      return;
  }
};

//handles onClick on play button
const handlePlay = (vid) => {
  const vidContainer = document.querySelector(".vid-player");
  const vidPlayer = document.querySelector(".vid-player iframe");
  //adds srcs
  handleSrc(vidPlayer, vid);
  vidContainer.style.display = "flex";
};

//handles hamburger menu animation
const handleNavToggle = () => {
  let navLines = document.querySelectorAll(".bun");
  let navLinks = document.querySelector(".nav-links");
  navLines[0].classList.toggle("toggled");
  navLines[1].classList.toggle("hidden");

  navLines[2].classList.toggle("toggled");

  navLinks.classList.toggle("toggled");
};

const vidContainerClick = (e) => {
  const vidContainer = document.querySelector(".vid-player");
  const vid = document.querySelector(".vid-player iframe");
  if (e.target === vidContainer) {
    //src handler function called to set src back to none
    handleSrc(vid);
    vidContainer.style.display = "none";
  }
  return;
};

//only function executed on load;
function app() {
  const vidContainer = document.querySelector(".vid-player");
  const vid = document.querySelector(".vid-player iframe");
  vidContainer.addEventListener("click", vidContainerClick);

  //event
  window.addEventListener("resize", handleResize);
  //called initially to toggle correct classes
  handleResize();
}

app();
