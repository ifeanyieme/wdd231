// Set current year in the footer
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
  
    // Theme toggle button
    const toggleButton = document.getElementById("toggle-theme");
  
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      
      // Optional: change icon based on theme
      if (document.body.classList.contains("dark-theme")) {
        toggleButton.textContent = "☀️";
      } else {
        toggleButton.textContent = "🌙";
      }
    });
  });
  