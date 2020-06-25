// ----------------------------
// preloader
// ----------------------------
window.addEventListener("load", function () {

    setTimeout(function () {
        document.querySelector(".loading-screen").style.display = "none"
    }, 1000)
    // document.querySelector(".loading-animation").classList.add("opacity-0")


})

// style active class on link navbar
const link = document.querySelectorAll('.navigation ul a')

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
        for (let j = 0; j < link.length; j++) {
            if (link[j].classList.contains("active")) {
                link[j].classList.remove("active")
            }
        }
        link[i].classList.add("active");
    })


}
// End style active class on link navbar

// Nav toggle
const headerNav = document.querySelector("header");
const navTogglerBtn = document.querySelector(".nav-toggler");
const allSection = document.querySelectorAll(".section");

navTogglerBtn.addEventListener("click", () => {
    asideSectionToggleBtn();
})

function asideSectionToggleBtn() {
    headerNav.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < allSection.length; i++) {
        // console.log(this);
        allSection[i].classList.toggle("open");
    }
}
// End of Nav toggle

// Animation on scroll
AOS.init({
    duration: 1200,
})