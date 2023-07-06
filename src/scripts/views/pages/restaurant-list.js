import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/restaurant-template';
import searchEngine from '../../utils/search-initiator';
import ICON from '../../component/icon';

const RestaurantList = {
    // TODO: membuat tampilan home
    async render() {
        return `
            <hero-section id="/home"></hero-section>
            <explore-section></explore-section>
            <div id="spinner" hidden></div>
            <div class="offline-info" id="offline" hidden>
                <img src="${ICON._offline}" alt="internet offline">
                <span>Whoops</span>
                <p>Please check your internet connection and try again!</p>
            </div>
            <partner-section></partner-section>
        `;
    },

    async afterRender() {
        // TODO: mendapatkan data restaurant
        const restaurant = await RestaurantSource.restaurantItem();
        const restaurantContainer = document.querySelector('restaurant-list');

        // TODO: menampilkan data restaurant
        const spinner = document.getElementById('spinner');
        const offlineState = document.getElementById('offline');

        try {
            if (restaurant) {
                spinner.removeAttribute('hidden');
                setTimeout(() => {
                    spinner.setAttribute('hidden', '');
                    restaurant.forEach((data) => {
                        restaurantContainer.innerHTML += createRestaurantItemTemplate(data);
                    });

                    // TODO: menampilkan data berdasarkan pencarian
                    const temp = document.querySelector('restaurant-list');
                    temp.insertAdjacentHTML('afterend', '<h1 class="search-info-not-found" id="info-active" style="display:none;">Sorry, We can not find your restaurant!</h1>');

                    const searchBar = document.querySelector('#search-data');
                    const restaurantItem = document.querySelectorAll('.restaurant-data');
                    searchEngine(searchBar, restaurantItem);
                }, 1000);
            } else {
                offlineState.removeAttribute('hidden', '');
            }
        } catch (error) {
            console.log(error);
        }
    },
};

export default RestaurantList;
