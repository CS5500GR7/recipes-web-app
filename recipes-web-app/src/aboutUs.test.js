import AboutUs from "./components/AboutUs/index";
test("Test about-us ", () => {
    let aboutUsFirstParagraph = "The Drink Masters is a destination where every cocktail enthusiast can explore our " +
        "curated collection of incredible cocktails and learn how to make them. Try a new spirit or put your own unique " +
        "spin on one of the hundreds of drinks you find. Discover the art of cocktails by learning a new technique “Behind the Bar,” " +
        "or just let the stunning, colorful drink images inspire your next big occasion or casual evening at home. " +
        "Search hundreds of recipes for every spirit type, from sweet Tequila to smoky Bourbon. There’s something " +
        "for everyone, from Margaritas to Martinis, party punches to seasonal favorites, old-fashioned classics to " +
        "the latest mixologist concoctions.";
    let aboutUsSecondParagraph = "Register for free and save your favorite recipes, or create a shopping list for your " +
        "next event. While you’re here, share your cocktail picks with your friends & fellow cocktail lovers. Keep coming" +
        " back to see the latest additions to our growing list of recipes and new bartending tips. We promise you’ll find" +
        " an amazing cocktail every time you visit.";
    expect(AboutUs()['props']['children'][0]['props']['children']).toBe(aboutUsFirstParagraph)
    expect(AboutUs()['props']['children'][1]['props']['children']).toBe(aboutUsSecondParagraph)
});
test("Test about-us error", () => {
    let aboutUsFirstParagraph = "The Drink";
    expect(AboutUs()['props']['children'][0]['props']['children']).toBe(aboutUsFirstParagraph)
});
