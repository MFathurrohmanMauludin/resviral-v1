/* eslint-disable no-undef */
Feature('Add Review for a Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('add review for one restaurant', async ({ I }) => {
    I.scrollTo('.title');
    I.waitForClickable('.restaurant-data a', 5);
    I.click(locate('.restaurant-data a').first());
    I.waitForElement('.detail-hero', 3);

    I.scrollTo('#myForm', -350, -350);

    I.waitForElement('#myForm', 6);
    I.fillField('#input-name', 'asuna yuuki');
    I.fillField('#input-review', 'The place is comfortable and suitable for families');
    I.click(locate('.btn-submit').first());

    I.scrollTo('#reviews-user');
});
