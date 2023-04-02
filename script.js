const threeDotIcon = document.querySelector("#other-menu-li");
const threeDotMenu = document.querySelector("#three-dot-menu");



threeDotIcon.addEventListener("click", function (e) {


    threeDotMenu.classList.toggle("active");
    console.log("a");
});


const navForm = document.querySelector("#nav-form");
const navBarNav = document.querySelector(".navbar-nav");

window.addEventListener("click", function (e) {
    console.log(e.target);


    if (e.target.id == "search-li") {
        console.log("search li");
        navForm.classList.add("active");
        navBarNav.classList.add("disable");
    }
    else if (e.target.id != "nav-form") {
        console.log("nav form değil ");
        navBarNav.classList.remove("disable");
        navForm.classList.remove("active");
    }
});