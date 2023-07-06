import './partners.js';

class PartnerComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <!-- partners section -->
        <section class=" flx-column-center" id="/partners">
          <div class="title" id="myPartners">Our Partners</div>
          <content-partners></content-partners>
        </section>
       `;
    }
}

customElements.define('partner-section', PartnerComponent);
