// Hospital Management System
console.log("HMS Loaded");

// Smooth button animation
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.03)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
