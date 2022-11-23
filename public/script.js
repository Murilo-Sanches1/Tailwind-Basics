const burgerIcon = document.getElementById("burger");
const menu = document.getElementById("menu");

burgerIcon.addEventListener("click", (e) => {
  e.preventDefault();

  menu.classList.contains("hidden")
    ? menu.classList.remove("hidden")
    : menu.classList.add("hidden");
});
