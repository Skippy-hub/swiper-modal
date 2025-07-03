const openButtonMalleus = document.querySelector(".button--malleus");
const openButtonXenos = document.querySelector(".button--xenos");
const openButtonHereticus = document.querySelector(".button--hereticus");
const malleus = document.querySelector(".modal-malleus");
const xenos = document.querySelector(".modal-xenos");
const hereticus = document.querySelector(".modal-hereticus");



openButtonMalleus.addEventListener("click", () => {
    malleus.classList.remove("modal--hidden");
    document.body.classList.add("no-scroll");
});

openButtonXenos.addEventListener("click", () => {
    xenos.classList.remove("modal--hidden");
    document.body.classList.add("no-scroll");
});

openButtonHereticus.addEventListener("click", () => {
    hereticus.classList.remove("modal--hidden");
    document.body.classList.add("no-scroll");
});


const closeButton = document.querySelectorAll('.modal__close');

closeButton.forEach((e) => {
    e.addEventListener("click", close);
});

function close(e){
    let currentItem = e.target.closest(".modal");
    currentItem.classList.add("modal--hidden");
    document.body.classList.remove("no-scroll");
}

const modal = document.querySelectorAll(".modal");

modal.forEach((e) => {
    e.addEventListener("click", close);
});


const swiper = new Swiper('.swiper', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,  //клики на круги
    },

    keyboard: {
        enabled: true, //управление клавиатурой
        onlyInViewport: true, //когда видно на экране
    },

    slidesPerView: 2, //количество слайдов
    
    spaceBetween: 10, //расстояние между слайдами
});