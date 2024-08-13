function switchLanguage(lang) {
  if (lang === "ar") {
    window.location.href = "index-ar.html";
  } else {
    window.location.href = "index-en.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const navBar = document.querySelector(".header__nav-bar");

  menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
});
