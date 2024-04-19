var menuicon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuicon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/icons8-menu-24.png';
    } else {
        ul.classList.add('ativo');document.querySelector('.menu-icon img').src = 'img/closepng.png';
    }
});
