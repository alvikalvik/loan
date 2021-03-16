import Slider from './slider';

export default class MiniSlider extends Slider {
    hideAllSlides() {
        for (const slide of this.slides) {
            slide.classList.remove(this.activeClass); 
            if (this.animated) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }                       
        }
    }

    showSlide(n) {        
        this.slides[n].classList.add(this.activeClass);
        if (this.animated) {
            this.slides[n].querySelector('.card__title').style.opacity = '1';
            this.slides[n].querySelector('.card__controls-arrow').style.opacity = '1';
        }        
    }  

    showNext() {
        this.slider.append(this.slides[this.slideIndex]);

        if (this.slideIndex >= this.slides.length - 1) {
            this.slideIndex = 0;
        } else {
            this.slideIndex++;
        }

        this.hideAllSlides();
        this.showSlide(this.slideIndex);        
    }

    showPrev() {
        if (this.slideIndex <= 0) {
            this.slideIndex = this.slides.length - 1;
        } else {
            this.slideIndex--;
        }   
        
        this.slider.prepend(this.slides[this.slideIndex]);

        this.hideAllSlides();
        this.showSlide(this.slideIndex);         
    }

    runAutoplay() {
        setInterval( () => {
            this.showNext();
        }, 5000);
    }

    render() {
        try {
            super.render();
            this.slider.style.cssText = `
                overflow: hidden;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
            `;
            
            if (this.autoplay) {
                this.runAutoplay();
            }
        } catch (error) {
            
        }
    }
    
}