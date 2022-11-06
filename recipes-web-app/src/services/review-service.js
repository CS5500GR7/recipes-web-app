const REVIEW_URL = "http://localhost:3001/api/reviews";

export const findReviewsForCocktail = (cocktailId) =>
    fetch(`${REVIEW_URL}/${cocktailId}`, {
        credentials: "include",
    }).then((response) => response.json());

export const createReviewForCocktail = (
    cocktailId,
    textArea,
    username,
    cocktailName,
    cocktailImg,
    userId
) => {
    return fetch(`${REVIEW_URL}/${cocktailId}`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
            cocktailId,
            textArea,
            username,
            cocktailName,
            cocktailImg,
            userId,
        }),
        headers: {
            "content-type": "application/json",
        },
    }).then((response) => response.json());
};

export const deleteReview = (cocktailId, reviewId) =>
    fetch(`${REVIEW_URL}/${cocktailId}/${reviewId}`, {
        method: "DELETE",
        credentials: "include",
        body: JSON.stringify({ cocktailId, reviewId }),
        headers: {
            "content-type": "application/json",
        },
    }).then((response) => response.json());

export const updateReview = (cocktailId, review) =>
    fetch(`${REVIEW_URL}/${cocktailId}`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(review),
        headers: {
            "content-type": "application/json",
        },
    }).then((response) => response.json());

export const findReviewsByUsername = (username) =>
    fetch(`${REVIEW_URL}/username/${username}`, {
        credentials: "include",
    }).then((response) => response.json());

const api = {
    findReviewsForCocktail,
    createReviewForCocktail,
    deleteReview,
    updateReview,
    findReviewsByUsername,
};

export default api;
