export class Slider {
    constructor(sliderSelector, slidesSelector, nextSelector, prevSelector) {
        this.slider = document.querySelector(sliderSelector);
        this.slides = this.slider.querySelectorAll(slidesSelector);
        this.next = this.slider.querySelectorAll(nextSelector);
        this.prev = this.slider.querySelectorAll(prevSelector);
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
    }    
}

export class MainSlider extends Slider {
    constructor(sliderSelector, slidesSelector, nextSelector, prevSelector, logoSelector) {
        super(sliderSelector, slidesSelector, nextSelector, prevSelector);
        this.logo = this.slider.querySelectorAll(logoSelector); 
        try {
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
    }
}