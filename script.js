// Dark Mode Toggle

const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

});

// Contact Form

document.getElementById("contactForm").addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thanks! Your message has been sent.");

});