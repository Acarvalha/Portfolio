document.addEventListener("DOMContentLoaded", function () {
 const blogList = document.getElementById("blog-list");
 fetch("data/posts.json")
 .then(response => response.json())
 .then(posts => {
 posts.forEach(post => {
 const postElement = document.createElement("div");
 postElement.classList.add("post-card");
 // TODO: Populate postElement with the post data
 // Suggested structure:
 // <h2> for post.title
 // <p class="post-meta"> for post.date and post.category
 // <p> for post.summary
 // A "Read More" button or link (can toggle full content visibility)
 blogList.appendChild(postElement);
 });
 })
 .catch(error => console.error("Error loading posts:", error));
});