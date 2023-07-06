// pencarian data
const searchEngine = (searchBar, data) => {
    searchBar.addEventListener('keyup', (event) => {
        const input = event.target.value;
        const inputData = input.toLowerCase();

        for (let i = 0; i < data.length; i++) {
            if (!data[i].innerHTML.toLowerCase().includes(inputData)) {
                data[i].setAttribute('id', 'restaurant-data-show');
            } else {
                data[i].removeAttribute('id', 'restaurant-data-show');
            }
        }

        const info = document.querySelectorAll('#restaurant-data-show');
        showInfo(info, data);
    });
};

function showInfo(info, data) {
    const isActive = document.querySelector('#info-active');
    if (info.length === data.length) {
        if (isActive != null) {
            isActive.setAttribute('style', 'display:unset;');
        }
    } else {
        isActive.setAttribute('style', 'display:none;');
        console.log('sedang mencari data');
    }
}

export default searchEngine;
