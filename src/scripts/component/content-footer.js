import ICON from './icon';

class ContentFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <ul>
            <li class="flx-column-center">
                <img class="logo-footer" src="${ICON._logo}" alt="restaurant viral logo">
                <q class="txt-slogan">find your dream restaurant with me</q>
            </li>
        </ul>

        <ul>
            <li class="tf-uppercase">About Us</li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">FAQs</a></li>
        </ul>

        <ul>
            <li class="tf-uppercase">product</li>
            <li><a href="#">Search Restaurant</a></li>
            <li><a href="#">Our Partners</a></li>
            <li><a href="#">How it Works</a></li>
        </ul>

        <ul>
            <li class="tf-uppercase">support</li>
            <li><a href="#">Term & Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
        </ul>

        <ul>
            <!-- social media -->
            <li class="tf-uppercase">Follow Us</li>
            <li class="social-media">
                <a href="#" aria-label="follow instagram">
                    <img src="${ICON._instagram}" alt="instagram">
                </a>
                <a href="#" aria-label="follow facebook">
                    <img src="${ICON._facebook}" class="ml-1" alt="facebook">
                </a>
                <a href="#" aria-label="follow twitter">
                    <img src="${ICON._twitter}" class="ml-1" alt="twitter">
                </a>
                <a href="#" aria-label="follow linkedIn">
                    <img src="${ICON._linkedIn}" class="ml-1" alt="linkedin">
                </a>
            </li>

            <li>
                <div class="download-apps">
                    <a href="#" aria-label="get it on google play">
                        <img src="${ICON._play}" alt="play store">
                    </a>
                    <a href="#" aria-label="download on the app store">
                        <img src="${ICON._apple}" alt="app store">
                    </a>
                </div>
            </li>
        </ul>
        `;
    }
}

customElements.define('content-footer', ContentFooter);
