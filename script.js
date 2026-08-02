const texts = [
  "Web Developer",
  "Frontend Developer",
  "HTML & CSS Expert"
];

let index = 0;
const heading = document.querySelector(".hero-text h2");

setInterval(() => {
    index = (index + 1) % texts.length;
    heading.textContent = texts[index];
}, 2000);