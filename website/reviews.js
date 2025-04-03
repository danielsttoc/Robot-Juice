document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.querySelector(".read-more-btn"); // Read more button
    const reviewsContainer = document.querySelector(".product-review");

    readMoreButton.addEventListener("click", function () {
        fetch("https://cis1110apicw.computing.edgehill.ac.uk/reviews")
            .then(response => response.json())
            .then(data => {
                data.forEach((entry) => {
                    const reviewFigure = document.createElement("figure");
                    reviewFigure.classList.add("user-review"); //class name

                    // Create the image container with a separate figcaption
                    const imageContainer = document.createElement("figcaption");
                    imageContainer.classList.add("reviewer-image-container");
                    const image = document.createElement("img");
                    image.src = entry.image || "robot-juice-images/reviewicon1.jpg";
                    image.alt = "Reviewer image";
                    image.classList.add("reviewer-image");
                    imageContainer.appendChild(image);
                    reviewFigure.appendChild(imageContainer);

                    // Create the nickname and rating container
                    const nicknameContainer = document.createElement("figcaption");
                    nicknameContainer.classList.add("reviewer-nickname-container");
                    const rating = document.createElement("p");
                    rating.classList.add("reviewer-rating");
                    rating.textContent = `Score: ${entry.rating}`;
                    const nickname = document.createElement("h3");
                    nickname.classList.add("reviewer-nickname");
                    nickname.textContent = entry.nickname;
                    nicknameContainer.appendChild(rating);
                    nicknameContainer.appendChild(nickname);
                    reviewFigure.appendChild(nicknameContainer);

                    // Create the empty space container
                    const emptySpaceContainer = document.createElement("figcaption");
                    emptySpaceContainer.classList.add("empty-space-container");
                    reviewFigure.appendChild(emptySpaceContainer);

                    // Create the review text container
                    const reviewTextContainer = document.createElement("figcaption");
                    reviewTextContainer.classList.add("reviewer-text-container");
                    const reviewText = document.createElement("p");
                    reviewText.classList.add("reviewer-text");
                    reviewText.textContent = entry.review;
                    reviewTextContainer.appendChild(reviewText);
                    reviewFigure.appendChild(reviewTextContainer);

                    // Append the newly created review figure to the reviews container
                    reviewsContainer.appendChild(reviewFigure);
                });
                readMoreButton.style.display = "none";
            })
            .catch(error => {
                console.error("Error fetching reviews:", error);
            });
    });
});