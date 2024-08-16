function switchLanguage(lang) {
  if (lang === "ar") {
    window.location.href = "index-ar.html";
  } else {
    window.location.href = "index-en.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  const menuToggle = document.querySelector(".header__menu-toggle");
  const listItems = document.querySelectorAll("#myList li a");
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

    listItems.forEach((li) => li.classList.remove("activee"));
    this.classList.add("activee");
  }
  const currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;

  //Submit the form to the BE
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    fetch("https://admin.smartvalet.inzox.co/api/v1/JoinUs", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.text().then((text) => {
          try {
            return JSON.parse(text);
          } catch (e) {
            throw new Error("Invalid JSON response");
          }
        });
      })
      // .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your contact has been sent",
          showConfirmButton: false,
          timer: 3000,
        });
        // Handle success
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
        console.log("data", JSON.stringify(data));
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  });
});
