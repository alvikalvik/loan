export default class VideoPlayer {
    constructor(triggersSelector, overlaySelector, containerId) {
        this.triggers = document.querySelectorAll(triggersSelector);
        this.overlay = document.querySelector(overlaySelector);
        this.container = this.overlay.querySelector(`#${containerId}`);
        this.close = this.overlay.querySelector('.close');
        this.player = null;
    }

    loadYoutubeApi() {
        const tag = document.createElement('script');        

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    createPlayer(path) {   
        this.player = new YT.Player('frame', {
        height: '100%',
        width: '100%',
        videoId: path
        });
    }

    init() {
        this.loadYoutubeApi();
        this.handleTriggers();
    }

    handleTriggers() {
       for (const trigger of this.triggers) {
           trigger.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }
                
                if (this.player === null) {
                    this.createPlayer(trigger.dataset.url);   
                }

                this.overlay.style.display = 'flex';               
                this.overlay.addEventListener('click', (evt) => {
                    if (evt.target && (evt.target === this.overlay || evt.target === this.close)) {
                        this.overlay.style.display = 'none';
                        if (this.player !== null) {
                            this.player.pauseVideo();    
                        }                        
                    }
                });                
           });
       } 
    }
}