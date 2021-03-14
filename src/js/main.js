import {Slider, MainSlider} from './modules/slider';
import VideoPlayer from './modules/videoPlayer';

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSlider('.page', '.page > div', '.next', undefined, '.sidecontrol > a:first-child');
    mainSlider.render();

    const mainPlayer = new VideoPlayer('.showup .play', '.overlay', 'frame');
    mainPlayer.init();
});

