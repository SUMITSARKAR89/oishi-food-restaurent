const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navigationLink = document.querySelector(".navigation-link");

openMenu.addEventListener("click", () =>{
    navigationLink.style.opacity = "1";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", () => {
    navigationLink.style.opacity = "0";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
})