function initFilter(cardSelector) {
    const filterInput = document.getElementById("filter-input");
    const noResults = document.getElementById("no-results");
    const cards = document.querySelectorAll(cardSelector);

    filterInput.addEventListener("input", function () {
        const query = this.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(function (card) {
            const title = card.querySelector(".card-title, h2").textContent.toLowerCase();  
            const category = (card.getAttribute("data-category") || card.querySelector(".post-meta")?.textContent || "").toLowerCase();

            const matchesQuery = title.includes(query) || category.includes(query);
            if (matchesQuery) {
                card.style.display = "";
                visibleCount++;
            }
            else {
                card.style.display = "none";
            }
        });


            noResults.style.display = visibleCount === 0 ? "block" : "none";
    });
}

             

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".project-card")) {
        initFilter(".project-card");
    }
    });