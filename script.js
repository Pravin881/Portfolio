/* ---------------- RAINBOW COLOR GENERATOR ---------------- */

function getRandomColor() {
    const colors = [
        "#ff0000", "#ff7f00", "#ffff00",
        "#00ff00", "#0000ff", "#4b0082",
        "#8f00ff", "#00ffff", "#ff1493"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

/* ---------------- PARTICLES LOADER ---------------- */

function loadParticles() {

    if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
    }

    particlesJS("particles-js", {
        particles: {
            number: { value: 100 },
            size: { value: 3 },
            move: { speed: 1 },
            color: { value: getRandomColor() },
            line_linked: {
                enable: true,
                color: getRandomColor(),
                opacity: 0.6
            }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "grab" }
            }
        }
    });
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

/* ---------------- TYPING INTRO ---------------- */

const text = "Hi 👋 I'm Pravin";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
typing();


/* ---------------- ROLE TYPING ---------------- */

const roles = [
    "Creative Thinker",
    "Frontend Developer",
    "Animation Lover",
    "Problem Solver",
    "Any Time Ready To Do Something"
];

let index = 0;
let char = 0;
let deleting = false;
const roleEl = document.getElementById("role");

function roleType() {

    if (index >= roles.length) index = 0;

    let current = roles[index];

    if (!deleting) {
        roleEl.textContent = current.slice(0, ++char);
        if (char === current.length) {
            deleting = true;
            setTimeout(roleType, 1000);
            return;
        }
    } else {
        roleEl.textContent = current.slice(0, --char);
        if (char === 0) {
            deleting = false;
            index++;
        }
    }

    setTimeout(roleType, deleting ? 60 : 100);
}
roleType();


// Simple Form Animation & Alert

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message Sent Successfully! 🚀");

    form.reset();
});

function scrollToContact() {
    document.querySelector(".footer").scrollIntoView({
        behavior: "smooth"
    });
}