import { createFavoriteRestaurantButtonTemplate, createUnfavoriteRestaurantButtonTemplate } from '../views/templates/restaurant-template';

const FavoriteButtonPresenter = {
    async init({ favoriteButtonContainer, favoriteRestaurants, restaurant }) {
        this._favoriteButtonContainer = favoriteButtonContainer;
        this._restaurant = restaurant;
        this._favoriteRestaurants = favoriteRestaurants;

        await this._renderButton();
    },

    // TODO: mengecek apakah restaurant telah ditambahkan atau belum ke favorite
    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderFavorited();
        } else {
            this._renderFavorite();
        }
    },

    // TODO: mengambil data di database
    async _isRestaurantExist(id) {
        const restaurant = await this._favoriteRestaurants.getRestaurant(id);
        return !!restaurant;
    },

    // TODO: button favorite
    _renderFavorite() {
        this._favoriteButtonContainer.innerHTML = createFavoriteRestaurantButtonTemplate();

        const favoriteButton = document.querySelector('#favoriteButton');
        favoriteButton.addEventListener('click', async () => {
            await this._favoriteRestaurants.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },

    // TODO: button favorited
    _renderFavorited() {
        this._favoriteButtonContainer.innerHTML = createUnfavoriteRestaurantButtonTemplate();

        const favoritedButton = document.querySelector('#favoriteButton');
        favoritedButton.addEventListener('click', async () => {
            await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default FavoriteButtonPresenter;
