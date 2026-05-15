fetch('reviews.json')
    .then(response => response.json())
    .then(data => {
        const reviewsContainer = document.getElementById('reviews');
        // Sort reviews by rating (highest first)
        data.sort((a, b) => b.rating - a.rating);

        data.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerHTML = `
                <h3>Rating: ${review.rating}</h3>
                <p>"${review.review}"</p>
                <small>By: ${review.author}</small>
            `;
            reviewsContainer.appendChild(reviewDiv);
        });
    })
    .catch(error => console.log('Error fetching reviews:', error));