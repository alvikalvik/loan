export default class Difference {
    constructor(containerSelector, itemsSelector, triggerSelector) {
        this.container = document.querySelector(containerSelector);
        this.items = this.container.querySelectorAll(itemsSelector);
        this.trigger = this.container.querySelector(triggerSelector);
        this.counter = 0;
    }

    hideItems() {
        for (const item of this.items) {
            if (item !== this.items[this.items.length - 1]) {
                item.style.display = 'none';
            }            
        }
    }

    handleTrigger() {
        this.trigger.addEventListener('click', (evt) => {
            if (evt.target) {
                evt.preventDefault();
            }

            this.items[this.counter].style.display = '';
            this.items[this.counter].classList.add('animated', 'fadeIn');
            this.counter++;

            if (this.counter >= this.items.length - 1) {
                this.items[this.items.length - 1].remove();
            }
        });
    }

    init() {
        this.hideItems();
        this.handleTrigger();
    }
}