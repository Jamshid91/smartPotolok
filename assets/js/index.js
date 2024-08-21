const wrapper = new Swiper('.swiper-wr', {
    loop: false,
        navigation: {
        nextEl: '.next-sw',
        prevEl: '.prev-sw',
      },
          pagination: {
          el: '.pagination-sw',
          clickable: true
      },
  });

  const partners = new Swiper('.swiper-partners', {
    loop: false,
        navigation: {
        nextEl: '.next-partners',
        prevEl: '.prev-partners',
      },
          pagination: {
          el: '.pagination-partners',
          clickable: true
      },
        breakpoints: {
          0: {
            spaceBetween: 16,
            slidesPerView: 2,
          },
          690: {
            spaceBetween: 24,  
            slidesPerView: 4,
          },
    }
  });


  const more_details = document.querySelectorAll('.more-details');

  more_details.forEach(more => {
    let count = 0;
    more.addEventListener('click', () => {
      if(count == 0) {
        more.parentElement.classList.add('showDetails')
        more.children[0].textContent = 'Скрыть';
        return count = 1;
      } else {
        more.parentElement.classList.remove('showDetails')
        more.children[0].textContent = 'Подробнее';
        return count = 0;
      }
    })
  })