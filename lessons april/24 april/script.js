const burger = document.querySelector(".burger");
const headerMobile = document.querySelector(".header__mobile");
burger.addEventListener("click", () => {
  headerMobile.classList.toggle("active");
});
// /////