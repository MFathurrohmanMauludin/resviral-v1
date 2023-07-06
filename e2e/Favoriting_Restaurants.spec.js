/* eslint-disable no-undef */
Feature('Favoriting Restaurants');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
    I.click(locate('#menu a').withText('favorite'));

    I.amOnPage('/#/my-favorite');
    I.dontSee('.restaurant-data');
    I.see('Let\'s To Find Your Restaurant favorite', '.favorite-not-found');
});

Scenario('favoriting one restaurant', ({ I }) => {
    I.waitInUrl('/', 1);
    I.waitForElement('.restaurant-data a', 5);
    I.seeElement('.restaurant-data a');
    I.click(locate('.restaurant-data a').first());

    I.waitForElement('.detail-hero', 5);
    I.waitForClickable('#favoriteButton', 2);
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    I.amOnPage('/#/my-favorite');
    I.seeElement('.restaurant-data');
});
