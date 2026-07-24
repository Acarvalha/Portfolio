document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");

    fetch("data/posts.json")
        .then(response => response.json())
        .then(posts => {
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));

            posts.forEach((post, index) => {
                const postElement = document.createElement("div");
                postElement.classList.add("post-card");

                const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });

                postElement.innerHTML = `
                    ${index === 0 ? '<span class="latest-badge">Latest Post</span>' : ''}
                    <h2>${post.title}</h2>
                    <p class="post-meta">${formattedDate} | ${post.category}</p>
                    <p>${post.summary}</p>
                    <button class="read-more-btn">Read More</button>
                    <div class="post-full-content">${post.content}</div>
                `;

                const readMoreBtn = postElement.querySelector(".read-more-btn");
                const fullContent = postElement.querySelector(".post-full-content");

                readMoreBtn.addEventListener("click", function () {
                    fullContent.classList.toggle("open");
                    readMoreBtn.textContent = fullContent.classList.contains("open") ? "Show Less" : "Read More";
                });

                blogList.appendChild(postElement);
            });

            if (typeof initFilter === "function") {
                initFilter(".post-card");
            }
        })
        .catch(error => console.error("Error loading posts:", error));
});