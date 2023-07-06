class HeroComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="image-hero">
            <picture>
                <source media="(max-width: 400px)" srcset="./img/hero/hero-image-small.jpg">
                <img src="./img/hero/hero-image.jpg" alt="hero-image">
            </picture>
            <div class="hero-text txt-center">
                <h1 class="txt-white lh-1 ls-10 tf-uppercase" tabindex="0">Don't bother looking for a restaurant, with
                    us your wish will definitely fit in your<span class="txt-bg-pink">heart</span>
                </h1>
                <p class="txt-white" tabindex="0">
                    With a comfortable atmosphere and delicious aroma of food, making your experience enjoyable.
                </p>
                <button class="btn-cta tf-uppercase txt-center" onclick="window.location.href='#/explore'">
                    let's explore
                </button>
            </div>
        </div>
       `;
    }
}

customElements.define('hero-section', HeroComponent);
