import Slider from './slider';

export default class MainSlider extends Slider {
    constructor({sliderSelector, slidesSelector, nextSelector, prevSelector, logoSelector = null} = {}) {
        super({sliderSelector, slidesSelector, nextSelector, prevSelector});
        try {
            this.logo = this.slider.querySelectorAll(logoSelector);
            this.hanson = this.slider.querySelector('.hanson');
        } catch (error) {
            console.log(error);
        }       
    }

    showSlide(n) {
        super.showSlide(n);
        if (this.slideIndex === 2) {
            try {
                this.showHansonWithDelay(3000);
            } catch (error) {
                console.log(error);
            }    
        }
    }

    showHansonWithDelay(delay) {
        this.hanson.style.display = 'none';
        this.hanson.classList.remove('animated', 'slideInUp');
        setTimeout(() => {
            this.hanson.style.display = '';
            this.hanson.classList.add('animated', 'slideInUp');
        }, delay);
    }

    render() {
        try {
            super.render();        
        
            for (const item of this.logo) {
                item.addEventListener('click', (evt) => {
                    if (evt.target) {
                        evt.preventDefault();
                    }

                    this.slideIndex = 0;
                    this.showSlide(this.slideIndex);
                });
            }
        } catch (error) {
            
        }
    }
}