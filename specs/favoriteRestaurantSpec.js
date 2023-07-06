/* eslint-disable no-undef */
// TODO: Integration Testing
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Favoriting A Restaurant', () => {
    const addFavoriteButtonContainer = () => {
        document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    };

    beforeEach(() => {
        addFavoriteButtonContainer();
    });

    fit('should show the favorite button when the restaurant has not been favorited before', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="favorite this restaurant"]'))
            .toBeTruthy();
    });

    fit('should not show the unfavorited button when the restaurant has not been favorited before', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unfavorite this restaurant"]'))
            .toBeFalsy();
    });

    fit('should be able to favorite the restaurant', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
        expect(restaurant).toEqual({ id: 1 });

        FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    fit('should not add a restaurant again when its already favorited', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

        // Tambahkan restaurant dengan ID 1 ke daftar favorite
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

        // Simulasikan pengguna menekan tombol favorite
        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

        // tidak ada restaurant yang ganda
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

        FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    fit('should not add a restaurant when it has no id', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
});
