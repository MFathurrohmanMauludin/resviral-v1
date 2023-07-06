const check = document.getElementById('check');
window.addEventListener('online', () => {
    if (navigator.onLine === true) {
        check.innerHTML = 'you are online';
        check.setAttribute('class', 'online');
        location.reload();
    }
});

window.addEventListener('offline', () => {
    if (navigator.onLine === false) {
        check.innerHTML = 'you are offline';
        check.setAttribute('class', 'offline');
    }
});
