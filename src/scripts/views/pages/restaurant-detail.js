import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createDetailRestaurantTemplate, createReviewTemplate } from '../templates/restaurant-template';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import ICON from '../../component/icon';
import API_ENDPOINT from '../../globals/api-endpoint';

const Detail = {
    async render() {
        return `
        <div id="show-detail">
            <div id="spinner" hidden></div>
            <div class="offline-info" id="offline" hidden>
                <img src="${ICON._offline}" alt="internet offline">
                <span>Whoops</span>
                <p>Please check your internet connection and try again!</p>
            </div>
        </div>
        `;
    },

    async afterRender() {
        // TODO: mendapatkan detail restaurant berdasarkan id
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurants = await RestaurantSource.detailRestaurant(url.id);

        // TODO: menampilkan data restaurant
        const restaurantContainer = document.querySelector('#show-detail');

        // TODO: spinner dan offline state
        const spinner = document.getElementById('spinner');

        if (restaurants) {
            spinner.removeAttribute('hidden');
            setTimeout(() => {
                spinner.setAttribute('hidden', '');
                restaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurants.restaurant);

                // TODO: menampilkan tombol favorite
                FavoriteButtonPresenter.init({
                    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
                    favoriteRestaurants: FavoriteRestaurantIdb,
                    restaurant: {
                        id: restaurants.restaurant.id,
                        name: restaurants.restaurant.name,
                        pictureId: restaurants.restaurant.pictureId,
                        city: restaurants.restaurant.city,
                        rating: restaurants.restaurant.rating,
                        description: restaurants.restaurant.description,
                    },
                });

                // TODO: menambahkan reviews
                const formReview = document.querySelector('#myForm');
                const reviewContainer = document.querySelector('#reviews-user');

                formReview.addEventListener('submit', async (event) => {
                    event.preventDefault();
                    const inputName = document.getElementById('input-name');
                    const inputReview = document.getElementById('input-review');
                    try {
                        const response = await fetch(API_ENDPOINT.REVIEW, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                id: url.id,
                                name: inputName.value,
                                review: inputReview.value,

                            }),

                        });

                        const responseJson = await response.json();
                        reviewContainer.innerHTML = createReviewTemplate(responseJson);
                    } catch (error) {
                        console.log(error);
                    }
                });
            }, 1000);
        }
    },
};

export default Detail;
