// navigation
const navigation = document.getElementById('menu');
const link = navigation.getElementsByTagName('a');

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function activeNavigation() {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        this.className += 'active';
    });
}
