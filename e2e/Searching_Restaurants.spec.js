/* eslint-disable no-undef */
Feature('Searching Restaurants');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('searching restaurants', async ({ I }) => {
    I.click(locate('.btn-cta').first());
    I.waitInUrl('/#/explore', 2);
    I.waitForElement('.restaurant-data', 3);
    I.seeElement('#search-data');
    I.fillField('#search-data', 'bali');

    const visibleRestaurant = await I.grabNumberOfVisibleElements('.restaurant-data');
    console.log(`${visibleRestaurant} restaurants are showing`);
});
