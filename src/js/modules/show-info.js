export default class ShowInfo {
    constructor(triggersSelector) {
        this.triggers = document.querySelectorAll(triggersSelector);
    }

    init() {
        this.triggers.forEach( (trigger) => {
            trigger.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }

                const sibling = trigger.closest('.module__info-show').nextElementSibling;
                
                sibling.classList.toggle('msg');   
                sibling.classList.toggle('animated');
                sibling.classList.toggle('fadeInUp');             
                sibling.style.marginTop = '20px';                
            });
        });
    }
}