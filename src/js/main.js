function switchLanguage(lang) {
  if (lang === "ar") {
    window.location.href = "index-ar.html";
  } else {
    window.location.href = "index-en.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const listItems = document.querySelectorAll("#myList li");
  const navBar = document.querySelector(".header__nav-bar");

  menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  listItems.forEach(function (item) {
    item.addEventListener("click", handleClickListItem);
  });

  function handleClickListItem() {
    navBar.classList.remove("active");
    menuToggle.classList.remove("active");
  }
  const currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;
});
