const menu_btn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.header-menu');

menu_btn.addEventListener('click', () => {
    menu.classList.toggle('showMenu');
    menu_btn.classList.toggle('clickedMenu')
});



const order_btn = document.querySelectorAll('.order-btn'),
      body = document.querySelector('body'),
      popUp_order = document.querySelector('.popUp-order');

order_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    popUp_order.classList.remove('d-none');
    body.classList.add('bodyStopScroll')
  })
})

  
$(".phone").inputmask({"mask": "+7(999) 999-99-99"});