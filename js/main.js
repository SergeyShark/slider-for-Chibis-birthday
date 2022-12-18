const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }

})


const sliderBg= new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5,
})

sliderMain.controller.control = sliderBg

document.querySelectorAll('.slider_item').forEach(item => {
    item.addEventListener('click', event =>{
        item.classList.toggle('opened')
    })
})
document.querySelectorAll('.slider__img').forEach(item => {
    item.addEventListener('click', event =>{
        item.classList.toggle('open')
    })
})

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e =>{
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})