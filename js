// Smooth scrolling for internal links (like back to top)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Create and append a scroll-to-top button
const button = document.createElement("button");
button.innerText = "⬆ Top";
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.padding = "10px 15px";
button.style.fontSize = "16px";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.backgroundColor = "#f06292";
button.style.color = "white";
button.style.cursor = "pointer";
button.style.display = "none";
button.style.zIndex = "9999";
document.body.appendChild(button);

// Show button on scroll
window.addEventListener("scroll", () => {
  button.style.display = window.scrollY > 300 ? "block" : "none";
});

// Scroll to top when button clicked
button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
