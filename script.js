// --------  Nav Menu Icon --------
document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.querySelector(".nav-menu-icon");
    var navMenu = document.querySelector(".nav-menu");
    var overlay = document.createElement("div");

    overlay.className = "overlay";
    document.body.appendChild(overlay);

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        // overlay.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    overlay.addEventListener("click", function () {
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
        menuIcon.classList.remove("active");
    });
});

  

// Smooth Scrolling to Sections
document.querySelector(".nav-menu").addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        event.preventDefault();
        let targetSectionID = event.target.getAttribute("href").substring(1);
        let targetSection = document.getElementById(targetSectionID);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
});

// Skill Progress Animation
var progressBars = document.querySelectorAll(".skill-progress > div");
var barContainer = document.getElementById("bar-container");
var animationDone = false;

// Initialize progress bars
function initializeBars() {
    progressBars.forEach(bar => (bar.style.width = "0%"));
}

initializeBars();

// Function to animate the bars smoothly
function fillBars() {
    progressBars.forEach(bar => {
        let targetWidth = parseInt(bar.getAttribute('data-bar-width'));
        let currentWidth = 0;
        
        function animateBar() {
            if (currentWidth < targetWidth) {
                currentWidth += 1;
                bar.style.width = currentWidth + "%";
                requestAnimationFrame(animateBar);
            }
        }
        animateBar();
    });
}

// Scroll event to trigger animation
function checkScroll() {
    var coordinates = barContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight - 100) {
        animationDone = true;
        fillBars();
    }
}

window.addEventListener("scroll", checkScroll);
