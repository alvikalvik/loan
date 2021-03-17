import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/videoPlayer';
import Difference from './modules/difference';
import Forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSlider({
        sliderSelector: '.page',
        slidesSelector: '.page > div',
        nextSelector: '.next',
        logoSelector: '.sidecontrol > a:first-child'
    });
    mainSlider.render();

    const modulePageSlider = new MainSlider({
        sliderSelector: '.moduleapp',
        slidesSelector: '.moduleapp > div',
        nextSelector: '.next, .nextmodule',
        prevSelector: '.prev, .prevmodule',
        logoSelector: '.sidecontrol > a:first-child'
    });
    modulePageSlider.render();

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

    new VideoPlayer('.showup .play', '.overlay', 'frame').init();
    new VideoPlayer('.module__video-item .play', '.overlay', 'frame').init();

    new Difference('.officerold', '.officer__card-item', '.card__click').init();
    new Difference('.officernew', '.officer__card-item', '.card__click').init();
    new Forms('.form', './assets/question.php').initForms();
});

