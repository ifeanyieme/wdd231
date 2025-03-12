document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter");
    const courses = document.querySelectorAll(".course");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active"); // Highlight selected button

            const category = this.getAttribute("data-category");

            courses.forEach(course => {
                if (category === "all" || course.getAttribute("data-category") === category) {
                    course.style.display = "block"; // Show matched courses
                } else {
                    course.style.display = "none"; // Hide others
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const lastModifiedElement = document.getElementById("last-modified");
    
    // Get the last modified date of the document
    const lastModified = document.lastModified;

    // Display it in the <span> element
    lastModifiedElement.textContent = lastModified;
});
