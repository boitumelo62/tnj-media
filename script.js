document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const dropdown = document.getElementById("dropdown");

  // Toggle mobile menu
  menuToggle.addEventListener("click", function () {
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });

  // Toggle dropdown menu inside mobile menu
  dropdown.addEventListener("click", function () {
    this.classList.toggle("open");
    const submenu = this.querySelector(".dropdown-menu");
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      mobileMenu.style.display = "none";
    }
  });
});
