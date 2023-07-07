class partnersItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const getSelector = document.querySelector('content-partners');
        fetch('./data/data-partners-restaurant.json')
            .then((res) => res.json())
            .then((data) => {
                data.partners.forEach((read) => {
                    getSelector.insertAdjacentHTML('beforeend', `
                    <img src="${read.imageUrl}" alt="${read.name}" tabindex="0">`);
                });
            });
    }
}

customElements.define('content-partners', partnersItem);
