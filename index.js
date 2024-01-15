const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");
const hamburgerContainer = document.querySelector(".hamburger-open-container");
const images = document.querySelectorAll(".creations-container-desktop");

let hamburgerContainerDisplay = false;

const toggleHamburger = () => {
  hamburgerContainerDisplay
    ? (hamburgerContainer.style.display = "none")
    : (hamburgerContainer.style.display = "block");
  hamburgerContainerDisplay = !hamburgerContainerDisplay;
};

const closeHamburgerOutsideClick = (event) => {
  if (
    !hamburgerContainer.contains(event.target) &&
    event.target !== hamburger
  ) {
    hamburgerContainer.style.display = "none";
    hamburgerContainerDisplay = false;
  }
};

images.forEach((image) => {
  image.addEventListener("mouseover", (event) => {
    console.log(event.target);
  });
});

closeButton.addEventListener("click", toggleHamburger);
hamburger.addEventListener("click", toggleHamburger);
document.addEventListener("click", closeHamburgerOutsideClick);
