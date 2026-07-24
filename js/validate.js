document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorSpan = document.getElementById(fieldId + "-error");
        errorSpan.textContent = message;
        errorSpan.classList.add("visible");
        field.classList.add("invalid");
        
        
        }
    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorSpan = document.getElementById(fieldId + "-error");
        errorSpan.textContent = "";
        errorSpan.classList.remove("visible");
        field.classList.remove("invalid");
        }
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "") {
            showError("name", "Please enter your name.");
            isValid = false; 
            }
        else {
            clearError("name");
            }

        if (email === "") {
            showError("email", "Please enter your email.");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("email", "Please enter a valid email address.");
            isValid = false;
        } else {
            clearError("email");
        }

        if (message === "") {
            showError("message", "Please enter your message.");
            isValid = false;
        } else if (message.length < 20) {
            showError("message", "Your message must be at least 20 characters long.");
            isValid = false;
        } else {
            clearError("message");
        }

        if (isValid) {
            form.style.display = "none"; // Hide the form
            document.getElementById("form-success").classList.add("visible"); // Show success message
        }
        });
    // Bonus: clear errors as the user types
    ["name", "email", "message"].forEach(function (id) {
        document.getElementById(id).addEventListener("input", function () {
        clearError(id);
        });
    });
});