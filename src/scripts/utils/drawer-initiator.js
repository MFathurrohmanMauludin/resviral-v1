const DrawerInitiator = {
    init({ button, drawer, content }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
    },

    _toggleDrawer(event, drawer) {
        drawer.classList.toggle('open');
        event.stopPropagation();
    },

    _closeDrawer(event, drawer) {
        drawer.classList.remove('open');
        event.stopPropagation();
    },
};

export default DrawerInitiator;

// const navigationDrawerButton = document.querySelector('#nav-drawer');
// const drawerElement = document.querySelector('#menu');
// const mainElement = document.querySelector('main');

// ketika button disentuh
// navigationDrawerButton.addEventListener('click', event => {
//     drawerElement.classList.toggle('open');
//     event.stopPropagation();
// });

// ketika layar disentuh
// mainElement.addEventListener('click', event => {
//     drawerElement.classList.remove('open');
//     event.stopPropagation();
// });
