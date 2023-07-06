import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../globals/config';
import ICON from '../../component/icon';

// TODO: restaurant item
const createRestaurantItemTemplate = (data) => `<div class="card restaurant-data">
    <div class="card-header">
    <picture>
        <source media="(max-width: 400px)" srcset="${CONFIG.SMALL_IMAGE_URL + data.pictureId}">
        <img class="lazyload" data-src="${CONFIG.MEDIUM_IMAGE_URL + data.pictureId}" alt="${data.name}">
    </picture>
        ${ratingStatusRestaurant(data.rating)}      
    </div>
    <div class="body-card">
        <div class="title-card tf-capitalize fs-18">
            <a href="/#/detail/${data.id}">${data.name}</a>
        </div>
        <div class="sub-title-card">
            <div class="rating">
                <img src="${ICON._star}" alt="rating"><span>${data.rating}</span>
            </div>
            <div class="location">
                <img src="${ICON._place}" alt="location"><span>${data.city}</span>
            </div>
        </div>
        <div class="desc-card">
            ${data.description}
        </div>
    </div>
</div>`;

// TODO: detail restaurant
const createDetailRestaurantTemplate = (data) => `
<div class="flx-column-center mt-3-em">
    <div class="detail-hero">
        <!-- image restaurant -->
        <div class="flx-column">
            <picture>
                <img class="restaurant-image lazyload" data-src="${CONFIG.MEDIUM_IMAGE_URL + data.pictureId}" alt="${data.name}">
            </picture>
            ${ratingStatusRestaurantForDetail(data.rating)}
        </div>

        <!-- about restaurant -->
        <div class="flx-column">
            <div class="flx-row-between mt-10">
                <h2 class="tf-uppercase" tabindex=0>${data.name}</h2>
                <div id="favoriteButtonContainer"></div>
            </div>
            <div class="flx-row">
                <div class="rating">
                    <img src="${ICON._star}" alt="rating"><span>${data.rating}&nbsp;(${data.customerReviews.length}
                        users)</span>
                </div>
                <div class="location">
                    <img src="${ICON._place}" alt="location"><span>${data.address}, ${data.city}.</span>
                </div>
            </div>
            <div class="facility-list">
                ${data.categories.map((category) => `<span tabindex=0>${(category.name)}</span>`).join(' ')}
            </div>
            <p tabindex=0>${data.description}</p>
        </div>
    </div>

    <!-- food list section -->
    <h1 class="tf-uppercase detail-heading">food list</h1>
    <div class="detail-list">
        ${data.menus.foods.map((food) => `
        <div class="card">
            <div class="card-header">
                <picture>
                    <img class="food-image" src="${ICON._foods}" alt="food image">
                </picture>
            </div>
            <div class="body-card">
                <div class="title-card tf-capitalize">
                    <span tabindex=0>${food.name}</span>
                </div>
            </div>
        </div>`).join(' ')}
    </div>

    <!-- drink list section -->
    <h1 class="tf-uppercase detail-heading">drink list</h1>
    <div class="detail-list">
        ${data.menus.drinks.map((drink) => `
        <div class="card">
            <div class="card-header">
                <picture>
                    <img class="food-image" src="${ICON._drinks}" alt="drink image">
                </picture>
            </div>
            <div class="body-card">
                <div class="title-card tf-capitalize">
                    <span tabindex=0>${drink.name}</span>
                </div>
            </div>
        </div>`).join(' ')}
    </div>

    <!-- reviews section -->
    <h1 class="tf-uppercase">customer reviews</h1>
    <span class="txt-center padding-lr-10">Your review will help others to find the best choice</span>
    <form class="flx-column-start gap-10" id="myForm">
        <input type="text" class="field-content rounded-all" id="input-name" aria-label="enter your fullname"
            placeholder="full name">
        <textarea class="comment-pallete" id="input-review" cols="30" rows="4"
            placeholder="please enter your comment"></textarea>
        <button class="btn-submit rounded-all">Submit</button>
    </form>
    <div class="flx-center">
        <div class="loading" id="loaders" hidden>
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
        </div>
    </div>
    <div class="detail-list" id="reviews-user">
     ${data.customerReviews.map((reviews) => `
        <div class="card">
            <div class="card-header">
                <img class="user-image" src="${ICON._reviews}" alt="user image">
            </div>
            <div class="body-card">
                <div class="title-card tf-uppercase txt-center">
                    <span tabindex=0>${reviews.name}</span>
                </div>
                <div class="desc-card" tabindex=0>
                    ${reviews.review}
                </div>
                <span class="txt-date" tabindex=0>${reviews.date}</span>
            </div>
        </div>`).join(' ')}
    </div>
</div>
`;

// TODO: reviews
const createReviewTemplate = (data) => `
    ${data.customerReviews.map((reviews) => `
        <div class="card">
            <div class="card-header">
                <img class="user-image" src="${ICON._reviews}" alt="user image">
            </div>
            <div class="body-card">
                <div class="title-card tf-uppercase txt-center">
                    <span tabindex=0>${reviews.name}</span>
                </div>
                <div class="desc-card" tabindex=0>
                    ${reviews.review}
                </div>
                <span class="txt-date" tabindex=0>${reviews.date}</span>
            </div>
        </div>`).join(' ')}
`;

// TODO: favorite button
const createFavoriteRestaurantButtonTemplate = () => `
    <button type="button" id="favoriteButton" aria-label="favorite this restaurant">
        <img class="icon-heart" src="${ICON._heartDisable}" alt="icon favorite">
    </button>
`;

// TODO: favorited button
const createUnfavoriteRestaurantButtonTemplate = () => `
    <button type="button" id="favoriteButton" style="padding: 10px; border: 1px solid #ffffff00;"
        aria-label="unfavorite this restaurant">
        <img class="icon-heart" src="${ICON._heartActive}" alt="icon favorite">
    </button>
`;

// TODO: rating status restaurant
const ratingStatusRestaurant = (rate) => {
    let statusRating = '';

    if (rate >= 4.5) {
        statusRating = '<div class="rating-state tf-uppercase">viral</div>';
    } else if (rate >= 4) {
        statusRating = '<div class="rating-state tf-uppercase">trending</div>';
    } else {
        statusRating = '';
    }
    return statusRating;
};

const ratingStatusRestaurantForDetail = (rate) => {
    let statusRating = '';

    if (rate >= 4.5) {
        statusRating = '<div class="rating-state-detail tf-uppercase">viral</div>';
    } else if (rate >= 4) {
        statusRating = '<div class="rating-state-detail tf-uppercase">trending</div>';
    } else {
        statusRating = '';
    }
    return statusRating;
};

export {
    createRestaurantItemTemplate,
    createDetailRestaurantTemplate,
    createFavoriteRestaurantButtonTemplate,
    createUnfavoriteRestaurantButtonTemplate,
    createReviewTemplate,
};
