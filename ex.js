/* ---------------- RAINBOW COLOR GENERATOR ---------------- */

function getRandomColor() {
    const colors = [
        "#ff0000", "#ff7f00", "#ffff00",
        "#00ff00", "#0000ff", "#4b0082",
        "#8f00ff", "#00ffff", "#ff1493"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}



/* ---------------- THEME TOGGLE ---------------- */

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(theme) {
    body.setAttribute("data-theme", theme);

    toggleBtn.innerHTML = theme === "dark" ?
        '<i class="fa-solid fa-moon"></i>' :
        '<i class="fa-solid fa-sun"></i>';

    localStorage.setItem("theme", theme);
    loadParticles();
}

toggleBtn.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);



//main Content



document.addEventListener("DOMContentLoaded", function() {
    const para = document.querySelector(".experience-details p");

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // animation only once
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(para);
});

/*practice add*/

const practiceSection = document.querySelector(".practice-section");

window.addEventListener("scroll", function() {
    const sectionTop = practiceSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 150) {
        practiceSection.classList.add("show");
    }
});

