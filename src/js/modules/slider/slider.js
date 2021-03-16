export default class Slider {
    constructor({
        sliderSelector = null,
        slidesSelector = null,
        nextSelector = null,
        prevSelector = null,
        activeClass = '',
        autoplay = false,
        animated = false
    } = {}) {
        this.slider = document.querySelector(sliderSelector);
        try {this.slides = this.slider.querySelectorAll(slidesSelector);} catch(e) {}
        this.next = document.querySelectorAll(nextSelector);
        this.prev = document.querySelectorAll(prevSelector);
        this.activeClass = activeClass;
        this.autoplay = autoplay;
        this.animated = animated;
        this.slideIndex = 0;
    }

    hideAllSlides() {
        for (const slide of this.slides) {
            slide.classList.remove('animated', 'fadeIn');
            slide.style.display = 'none';
        }
    }

    showSlide(n) {
        this.slides[n].classList.add('animated', 'fadeIn');
        this.slides[n].style.display = '';
    }

    showNext() {
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

        this.hideAllSlides();
        this.showSlide(this.slideIndex);
    }

    render() {
        try {
            this.hideAllSlides();
            this.showSlide(this.slideIndex);
            
            try {
                for (const item of this.next) {
                    item.addEventListener('click', (evt) => {
                        if (evt.target) {
                            evt.preventDefault();
                        }
        
                        this.showNext();
                    });
                }
                
                for (const item of this.prev) {
                    item.addEventListener('click', (evt) => {
                        if (evt.target) {
                            evt.preventDefault();
                        }
        
                        this.showPrev();
                    });
                }
            } catch (error) {
                console.log(error);
            }

            // const intervalFunction = this.showNext.bind(this);
            // setInterval(intervalFunction, 3000);
        } catch (error) {
            
        }
    }    
}

