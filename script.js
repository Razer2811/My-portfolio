document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        });
    }
});
