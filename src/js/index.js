import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
    fetch(
        'https://www.mku-journal.online/catalog/recommendations?is_main=false'
    )
        .then(response => response.json())
        .then(data => {
            console.log('Рандомные товары:', data);
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });

    const swiper = new Swiper('swiper-container', {
        slidesPerView: 'auto',
        loop: false,
        breakpoints: {
            1440: {
                spaceBetween: 48,
            },
            1024: {
                spaceBetween: 40,
            },
            768: {
                spaceBetween: 20,
            },
            375: {
                spaceBetween: 26,
            },
        },
    });

    function createSlides(data) {
        const swiperWrapper = document.querySelector('.swiper-wrapper');

        data.forEach(product => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');

            slide.innerHTML = `
              <picture class="tellus__picture">
                <source srcset="${product.img.img_webp}">
                <img class="swiper-slide-img" src="${product.img.img_default}" alt="${product.name}">
              </picture>
              <div class="tellus__slide-info">
                <div class="tellus__slide-info__type">${product.type}</div>
                <div class="tellus__slide-info__name">${product.name}</div>
                <div class="tellus__slide-info__descr">${product.description}</div>
              </div>
            `;

            swiperWrapper.appendChild(slide);
        });
    }
});
