document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        // TODO: Find or create an error element next to the field
        // TODO: Set its text to message and make it visible
        // Hint: use field.nextElementSibling or a dedicated <span class="error-msg">
        }
    function clearError(fieldId) {
        // TODO: Hide or clear the error message for this field
        }
    function validateEmail(email) {
        // TODO: Return true if email matches a valid format, false otherwise
        // Hint: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        }
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        // TODO: Validate name — show error if empty
        // TODO: Validate email — show error if empty or invalid format
        // TODO: Validate message — show error if fewer than 20 characters
        // TODO: If isValid is true, show a success message
        });
    // Bonus: clear errors as the user types
    ["name", "email", "message"].forEach(function (id) {
        document.getElementById(id).addEventListener("input", function () {
        clearError(id);
        });
    });
});