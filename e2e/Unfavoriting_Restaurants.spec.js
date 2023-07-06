/* eslint-disable no-undef */
const assert = require('assert');

Feature('UnFavoriting Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/my-favorite');
});

Scenario('showing empty list favorite', ({ I }) => {
    I.dontSee('.restaurant-data');
    I.see('Let\'s To Find Your Restaurant favorite', '.favorite-not-found');
});

Scenario('cancel a restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.waitForElement('.restaurant-data a', 5);
    I.seeElement('.restaurant-data a');

    const firstRestaurant = locate('.restaurant-data a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.waitForElement('.detail-hero', 5);
    I.seeElement('#favoriteButton');
    I.waitForClickable('#favoriteButton', 2);
    I.click('#favoriteButton');

    const favoritedRestaurantTitle = await I.grabTextFrom('.detail-hero h2');
    assert.strictEqual(firstRestaurantTitle.toUpperCase(), favoritedRestaurantTitle);

    I.amOnPage('/#/my-favorite');
    I.seeElement('.title-card a');
    I.click(locate('.title-card a').first());

    I.waitForElement('.detail-hero', 3);
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    I.amOnPage('/#/my-favorite');
    I.dontSee('.restaurant-data');
});
