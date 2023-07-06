import 'regenerator-runtime'; /* for async await transpile */
import '../styles/styles.css';
import './component/app-bar.js';
import './utils/navigation-initiator.js';
import './utils/online-state.js';
import './component/hero-component.js';
import './component/explore-component.js';
import './component/restaurant-list.js';
import './component/partner-component.js';
import './component/content-footer.js';
import App from './views/app';
import swRegister from './utils/sw-register';

// navigation drawer
const app = new App({
    button: document.querySelector('#nav-drawer'),
    drawer: document.querySelector('#menu'),
    content: document.querySelector('#main-content'),
});

// event listener hashchange (ketika url hash diubah)
window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', async () => {
    app.renderPage();
    swRegister();
});
