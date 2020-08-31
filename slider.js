const slider = $('.slider__list').bxSlider({
    pager: false,
    controls: false,
});

$('.slider__left--direction--left').click((e) => {
    e.preventDefault();

    slider.goToPrevSlide();
})


$('.slider__right--direction--right').click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
})