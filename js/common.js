// слайдер

var mySwiper = new Swiper('.swiper-box1', {
    loop: true,
    roundLengths: true,
    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination',
    }

})

// мультисвайпер 

var swiper = new Swiper('.swiper-box', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});


// меню мобильное

var humburger = document.querySelector('.js-humburger');
var navigation = document.querySelector('.js-navigation');

humburger.addEventListener('click', function() {
    navigation.classList.toggle('active');
    humburger.classList.toggle('active');
})


// меню основное

var humburger1 = document.querySelector('.js-humburger1');
var navigation1 = document.querySelector('.js-navigation1');

humburger1.addEventListener('mouseover', function() {
    navigation1.classList.toggle('active');
    humburger1.classList.toggle('active');
})

navigation1.addEventListener('mouseover', function() {
    navigation1.classList.toggle('active');
    humburger1.classList.toggle('active');
})

navigation1.addEventListener('mouseout', function() {
    navigation1.classList.remove('active');
    humburger1.classList.remove('active');
})

humburger1.addEventListener('mouseout', function() {
    navigation1.classList.remove('active');
    humburger1.classList.remove('active');
})