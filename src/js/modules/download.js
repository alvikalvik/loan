export default class Download {
    constructor(triggersSelector, path) {
        this.triggers = document.querySelectorAll(triggersSelector);
        this.path = path;
    }

    downloadFile(path) {
        const link = document.createElement('a');

        link.setAttribute('href', path);
        link.setAttribute('download', 'nice-picture');

        link.click();
    }

    init() {
        this.triggers.forEach( (trigger) => {
            trigger.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }

                this.downloadFile(this.path);
            });
        });
    }
}