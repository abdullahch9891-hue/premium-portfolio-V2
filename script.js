
const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});
const texts = [
    "Web Developer",
    "Frontend Developer",
    "HTML & CSS Expert"
];

const typing = document.getElementById("typing");

if (typing) {
    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (!deleting) {
            typing.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            typing.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }

        setTimeout(typeEffect, deleting ? 70 : 120);
    }

    window.addEventListener("load", typeEffect);
}

const particlesContainer = document.getElementById("particles-js");
if (particlesContainer && typeof particlesJS === "function") {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80
            },
            color: {
                value: "#38bdf8"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5
            },
            size: {
                value: 3
            },
            move: {
                enable: true,
                speed: 2
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#38bdf8",
                opacity: 0.4,
                width: 1
            }
        }
    });
}

const glow = document.querySelector(".cursor-glow");
if (glow) {
    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}

const progressBar = document.getElementById("progress-bar");
if (progressBar) {
    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";
    });
}
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
const skillBars = document.querySelectorAll(".progress-bar");

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
});

skillBars.forEach((bar) => {
    skillsObserver.observe(bar);
});
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show-menu");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show-menu");
        });
    });
}
 // =========================
// PREMIUM 2nd PAGE TRANSITION
// ==========================

const transitionStyle = document.createElement("style");

transitionStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.6s ease;
    }

    body.page-loaded {
        opacity: 1;
    }

    body.page-exit {
        opacity: 0;
        transform: scale(0.98);
        transition: opacity 0.45s ease, transform 0.45s ease;
    }
`;

document.head.appendChild(transitionStyle);

// Page open animation
window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});

// Page change animation
document.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (
            href &&
            !href.startsWith("#") &&
            !href.startsWith("http") &&
            !href.startsWith("mailto:")
        ) {
            e.preventDefault();

            document.body.classList.remove("page-loaded");
            document.body.classList.add("page-exit");

            setTimeout(() => {
                window.location.href = href;
            }, 450);
        }

    });

});
