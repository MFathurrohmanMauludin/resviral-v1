/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unfavoriting A Restaurant', () => {
    const addFavoriteButtonContainer = () => {
        document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    };

    beforeEach(async () => {
        addFavoriteButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    fit('should display unfavorite widget when the restaurant has been favorited', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unfavorite this restaurant"]'))
            .toBeTruthy();
    });

    fit('should not display like widget when the movie has been liked', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="favorite this restaurant"]'))
            .toBeFalsy();
    });

    fit('should be able to remove liked movie from the list', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
        document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });

    fit('should not throw error if the unliked movie is not in the list', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

        // hapus dulu restaurant dari daftar restaurant yang disukai
        await FavoriteRestaurantIdb.deleteRestaurant(1);

        // kemudian, simulasikan pengguna menekan widget batal memfavoritkan restaurant
        document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
});
