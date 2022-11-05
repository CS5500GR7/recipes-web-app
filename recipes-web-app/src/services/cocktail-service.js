const findCocktailByName = (cocktailName) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
        .then(response => response.json())
}

const findCocktailByCocktailId = (cocktailId) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
        .then(response => response.json())
}

export default {
    findCocktailByName,
    findCocktailByCocktailId
}
