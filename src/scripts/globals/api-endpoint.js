import CONFIG from './config';

const API_ENDPOINT = {
    RESTAURANT_ITEM: `${CONFIG.BASE_URL}list`,
    REVIEW: `${CONFIG.BASE_URL}/review`,
    DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
    SEARCH: (data) => `${CONFIG.BASE_URL}/search?q=${data}`,
};

export default API_ENDPOINT;
