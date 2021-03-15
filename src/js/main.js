import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/videoPlayer';

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSlider({
        sliderSelector: '.page',
        slidesSelector: '.page > div',
        nextSelector: '.next',
        logoSelector: '.sidecontrol > a:first-child'
    });
    mainSlider.render();

    const showupSlider = new MiniSlider({
        sliderSelector: '.showup__content-slider',
        slidesSelector: '.showup__content-slider > .card',
        nextSelector: '.showup__next',
        prevSelector: '.showup__prev',       
        activeClass: 'card-active',
        animated: true
    });
    showupSlider.render();

    const modulesSlider = new MiniSlider({
        sliderSelector: '.modules__content-slider',
        slidesSelector: '.modules__content-slider > .card',
        nextSelector: '.modules .slick-next',
        prevSelector: '.modules .slick-prev',       
        activeClass: 'card-active',
        autoplay: true,
        animated: true
    });
    modulesSlider.render();

    const feedSlider = new MiniSlider({
        sliderSelector: '.feed__slider',
        slidesSelector: '.feed__slider > .feed__item',
        nextSelector: '.feed__slider .slick-next',
        prevSelector: '.feed__slider .slick-prev',       
        activeClass: 'feed__item-active',
        autoplay: false,
        animated: false
    });
    feedSlider.render();

    const mainPlayer = new VideoPlayer('.showup .play', '.overlay', 'frame');
    mainPlayer.init();
});

