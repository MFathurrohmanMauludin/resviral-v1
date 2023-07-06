class ExploreComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <!-- explore section -->
        <section class="flx-column-center" id="/explore">
          <div class="title">Explore Restaurant</div>
    
          <!-- search -->
          <form class="search-component" id="form-search">
            <div class="inline">
              <input type="text" class="field-content rounded-all" name="search" id="search-data"
                aria-label="search restaurant" placeholder=" ">
              <label class="tf-capitalize">search restaurant</label>
            </div>
          </form>

          <!-- restaurant list -->
          <restaurant-list></restaurant-list>
        </section>
       `;
  }
}

customElements.define('explore-section', ExploreComponent);
