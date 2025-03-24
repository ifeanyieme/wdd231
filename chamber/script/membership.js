// Wait for the DOM to fully load before executing scripts
document.addEventListener("DOMContentLoaded", () => {
    initializeForm();
    initializeModals();
});

/**
 * Initializes the membership form by setting a timestamp and adding validation.
 */
function initializeForm() {
    const form = document.querySelector("form");
    const timestampField = document.getElementById("timestamp");

    // Auto-fill the timestamp field with the current date and time
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Add form submission event listener
    if (form) {
        form.addEventListener("submit", (event) => {
            if (!validateForm()) {
                event.preventDefault(); // Prevent submission if validation fails
            }
        });
    }
}

/**
 * Validates the form fields and highlights errors if any.
 * @returns {boolean} - Returns true if all required fields are valid, otherwise false.
 */
function validateForm() {
    const requiredFields = document.querySelectorAll("input[required], select[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
        if (!field.value.trim()) {
            field.classList.add("error");
            isValid = false;
        } else {
            field.classList.remove("error");
        }
    });

    return isValid;
}

/**
 * Initializes the membership modals by setting up event listeners.
 */
function initializeModals() {
    const modalTriggers = document.querySelectorAll(".card button");
    const modals = document.querySelectorAll(".modal");

    // Attach click event to each "Learn More" button
    modalTriggers.forEach((button) => {
        button.addEventListener("click", (event) => {
            const membershipLevel = event.target.closest(".card").dataset.level;
            showModal(membershipLevel);
        });
    });

    // Attach event to close modals when clicking outside or on the close button
    modals.forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal || event.target.classList.contains("close")) {
                closeModal();
            }
        });
    });
}

/**
 * Displays the modal corresponding to the selected membership level.
 * @param {string} level - The membership level to display.
 */
function showModal(level) {
    const modal = document.getElementById(level);
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }
}

/**
 * Closes all open modals and restores body scrolling.
 */
function closeModal() {
    document.querySelectorAll(".modal").forEach((modal) => {
        modal.style.display = "none";
    });
    document.body.style.overflow = "auto"; // Restore scrolling
}

document.getElementById("timestamp").value = new Date().toISOString();
        function showModal(id) {
            document.getElementById(id).style.display = "block";
        }
        function closeModal() {
            document.querySelectorAll(".modal").forEach(modal => modal.style.display = "none");
        }