const USER_URL = "http://localhost:3001/api";

export const isFavorite = (cocktailId, userId) =>
    fetch(`${USER_URL}/favorite/${cocktailId}/${userId}`).then((res) =>
        res.json()
    );

export const findFavoritesByUserId = (userId) =>
    fetch(`${USER_URL}/favorite/${userId}`).then((res) => res.json());

export const addFavorite = (
    cocktailId,
    userId,
    username,
    cocktailName,
    cocktailImg
) =>
    fetch(`${USER_URL}/favorite`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            cocktailId,
            userId,
            username,
            cocktailName,
            cocktailImg,
        }),
    }).then((res) => res.json());

export const removeFavorite = (cocktailId, userId) =>
    fetch(`${USER_URL}/favorite`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ cocktailId, userId }),
    }).then((res) => res.json());

export const findAllFavorites = () =>
    fetch(`${USER_URL}/favorite`).then((response) => response.json());

const api = {
    isFavorite,
    findFavoritesByUserId,
    addFavorite,
    removeFavorite,
    findAllFavorites,
};

export default api;
