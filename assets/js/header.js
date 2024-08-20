const menu_btn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.header-menu');

menu_btn.addEventListener('click', () => {
    menu.classList.toggle('showMenu');
    menu_btn.classList.toggle('clickedMenu')
})