import {Slider, MainSlider} from './modules/slider';

const mainSlider = new MainSlider('.page', '.page > div', '.next', undefined, '.sidecontrol > a:first-child');
mainSlider.render();