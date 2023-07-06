import RestaurantList from '../views/pages/restaurant-list';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/restaurant-detail';

// Di dalamnya kita tuliskan URL dan halaman yang ingin dimunculkan pada url tersebut.
const routes = {
    '/': RestaurantList, // default page
    '/explore': RestaurantList, // default page
    '/partners': RestaurantList, // default page
    '/home': RestaurantList,
    '/my-favorite': Favorite,
    '/detail/:id': Detail,
};

export default routes;
