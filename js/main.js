// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// SCROLL PROGRESS
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;
    document.querySelector(".scroll-progress").style.width = progress + "%";
});

// TYPING EFFECT
const typingText = document.querySelector(".typing");
const words = ["Premium Websites", "Luxury Design", "High Authority Brands"];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// HAMBURGER
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});