import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/restaurant-template';

const Favorite = {
    // TODO: membuat tampilan utama favorite page
    async render() {
        return `
            <restaurant-list id="restaurants"></restaurant-list>
        `;
    },

    // TODO: mengambil data dari IndexedDB (FavoriteMoviedb)
    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantContainer = document.querySelector('#restaurants');

        if (restaurants.length >= 1) {
            restaurants.forEach((data) => {
                restaurantContainer.innerHTML += createRestaurantItemTemplate(data);
            });
        } else {
            restaurantContainer.insertAdjacentHTML('afterend', '<div class="favorite-not-found">Let\'s To Find Your Restaurant favorite</div>');
        }
    },
};

export default Favorite;
