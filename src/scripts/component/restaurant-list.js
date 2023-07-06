class restaurantList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = '';
    }
}

customElements.define('restaurant-list', restaurantList);
