// Theme toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
  
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Form submission handling
  document.getElementById('joinForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('form-message');
  
    if (fullName && email && interest) {
      message.textContent = "Thanks for joining! We'll be in touch.";
      message.style.color = "green";
      this.reset();
    } else {
      message.textContent = "Please fill in all required fields.";
      message.style.color = "red";
    }
  });
  