document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");

    function applyTheme(theme) {
        document.body.setAttribute("data-theme", theme);
        toggleBtn.textContent = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
        localStorage.setItem('theme', theme);
    }
    function loadSavedTheme() {
    const saved = localStorage.getItem("theme");
    if (saved) {
        applyTheme(saved);
    } else {
        applyTheme("dark"); // Default theme(ik it says to make default light but i think dark looks better)
    }
        }
    toggleBtn.addEventListener("click", function () {
        const current = document.body.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        });
    loadSavedTheme(); // Run on every page load
    });