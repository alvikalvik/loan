export default class VideoPlayer {
    constructor(triggersSelector, overlaySelector, containerId) {
        this.triggers = document.querySelectorAll(triggersSelector);
        this.overlay = document.querySelector(overlaySelector);
        this.container = this.overlay.querySelector(`#${containerId}`);
        this.close = this.overlay.querySelector('.close');
        this.player = null;
        this.url = '';
        this.activeTrigger = null;
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
            videoId: path,
            events: {          
                'onStateChange': this.onPlayerStateChange.bind(this)
            }
        });
    }
    
    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeTrigger.closest('.module__video-item').nextElementSibling;
            const playBtn = this.activeTrigger.querySelector('svg').cloneNode(true);

            if (state.data === 0) {
                if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
                    blockedElem.querySelector('.play__circle').classList.remove('closed');
                    blockedElem.querySelector('svg').remove();
                    blockedElem.querySelector('.play__circle').append(playBtn);
                    blockedElem.querySelector('.play__text').textContent = 'Play video';
                    blockedElem.querySelector('.play__text').classList.remove('attention');
                    blockedElem.style.opacity = 1;
                    blockedElem.style.filter = 'none';
                    blockedElem.dataset.disabled = 'false';
                }
            }
        } catch (error) {
            
        }        
    }

    handleTriggers() {
        this.triggers.forEach( (trigger, i) => {
            if (i % 2 !== 0) {
                trigger.closest('.module__video-item').dataset.disabled = 'true';
            }

            trigger.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }

                if (!trigger.closest('.module__video-item') || trigger.closest('.module__video-item').dataset.disabled !== 'true') {
                    this.activeTrigger = trigger;

                    if (this.player === null) {
                        this.url = trigger.dataset.url;
                        this.createPlayer(this.url);                        
                    } 
                    
                    if (this.url !== trigger.dataset.url) {
                        this.url = trigger.dataset.url;
                        this.player.loadVideoById({videoId:this.url});
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
                }



                      
                
                          
           });
        });

    }

    init() {
        if (this.triggers.length > 0) {
            this.loadYoutubeApi();
            this.handleTriggers();
        }        
    }
}