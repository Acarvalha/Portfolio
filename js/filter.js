document.addEventListener("DOMContentLoaded", function () {
 const filterInput = document.getElementById("filter-input");
 const noResults = document.getElementById("no-results");
 // Adjust the selector to match your card markup
 const cards = document.querySelectorAll(".project-card");
 filterInput.addEventListener("input", function () {
 const query = this.value.toLowerCase().trim();
 let visibleCount = 0;
 cards.forEach(function (card) {
 // TODO: Read the title and category (or description) from the card
 // Hint: card.querySelector(".card-title").textContent.toLowerCase()
 // TODO: Show the card if query matches title OR category/description
 // TODO: Hide it otherwise
 // Hint: card.style.display = "none" or "" (empty string to restore)
 // TODO: Increment visibleCount for each visible card
 });
 // TODO: Show noResults element if visibleCount === 0, hide it otherwise
 });
});