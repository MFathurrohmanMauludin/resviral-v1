import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
    static async restaurantItem() {
        const response = await fetch(API_ENDPOINT.RESTAURANT_ITEM);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        try {
            const response = await fetch(API_ENDPOINT.DETAIL(id));
            const responseJson = response.json();
            return responseJson;
        } catch (error) {
            const offlineState = document.getElementById('offline');
            setTimeout(() => offlineState.removeAttribute('hidden', ''), 1100);
            return error;
        }
    }
}

export default RestaurantSource;
