import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

// Class App dibuat bertujuan untuk menginisiasikan komponen-komponen dari Application Shell.
class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });

        // kita bisa menginisiasikan komponen lain bila ada
    }

    // me-render halaman berdasarkan URL yang aktif
    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();

        // mempertahankan fungsi skip to content
        const skipLinkElem = document.querySelector('.skip-to-content');
        skipLinkElem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#main-content').focus();
        });
    }
}

export default App;
