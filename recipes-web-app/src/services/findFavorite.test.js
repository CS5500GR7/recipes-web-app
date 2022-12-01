import React from "react";
import { findFavoritesByUserId } from "./favorite-service";

// Mannually mock the fetch.
globalThis.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve("fakecocktailid"),
    })
);

// Test findFavoritesByUserId().
beforeEach(() => {
    fetch.mockClear();
});

it("find favorite by user id", async () => {
    const fakecocktailid = await findFavoritesByUserId("fakeuserid");

    expect(fakecocktailid).toEqual("fakecocktailid");
    expect(fetch).toHaveBeenCalledTimes(1);
});
