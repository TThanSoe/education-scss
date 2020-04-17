const navBar = () => {
  const mainNav = document.getElementById("nav-menu");
  const navBarToggle = document.getElementById("navbar-toggle");

  navBarToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    mainNav.classList.toggle("active");
  });
};

navBar();

function modalNewLetter() {
  console.log("new letter");
  document.getElementById("modal-newsletter").style.display = "block";
}
function modalClose() {
  document.getElementById("modal-newsletter").style.display = "none";
}
