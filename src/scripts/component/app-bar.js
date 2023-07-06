import ICON from './icon';

class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="logo">
                <a href="/" aria-label="restaurant viral">
                    <img src="${ICON._logo}" alt="restaurant viral logo">
                </a>
            </div>

            <div class="drawer-menu">
                <button type="menu" id="nav-drawer" title="navigation button" aria-label="navigation drawer">
                    <img src="${ICON._menu}" alt="navigation">
                </button>
            </div>

            <nav id="menu">
                <ul id="nav-top">
                    <li><a href="#/home" class="active">home</a></li>
                    <li><a href="#/my-favorite">favorite</a></li>
                    <li><a href="#/partners">partners</a></li>
                    <li><a href="https://www.linkedin.com/in/mfathurrohmanmauludin/">about</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);
