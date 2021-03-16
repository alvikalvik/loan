export default class Forms {
    constructor(formsSelector, url) {
        this.forms = document.querySelectorAll(formsSelector);
        this.inputs = document.querySelectorAll('input');        
        this.message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Мы с Вами скоро свяжемся!',
            fail: 'Ошибка отправки данных...',
        };
        this.currentMessage = '';            
        this.submitUrl = url;
    }

    async sendForm(url, data) {
        const response = await fetch(url, {
            method: 'POST',            
            body: data
        });        
    
        if (response.ok) {                   
            return await response.text();            
        } else {         
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }             
    }

    clearInputs() {
        for (const input of this.inputs) {
            input.value = '';
        }        
    }

    checkEmailInputs() {
        const emailInputs = document.querySelectorAll('input[type="email"]');
        for (const input of emailInputs) {
            input.addEventListener('input', () => {
                if (/[а-яё]/gi.test(input.value)) {
                    console.log('shakeX');
                    input.classList.add('animated', 'shake');
                    setTimeout( () => {
                        input.classList.remove('animated', 'shake');
                    }, 300);
                }
                input.value = input.value.replace(/[а-яё]/gi, '');                
            });
        }
    }

    checkTelInputs() {
        let inputs = document.querySelectorAll('input[name="phone"]');
    
        for (const input of inputs) {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        }
    
        function setCursorPosition(pos, elem) {
            elem.focus();
    
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
    
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }
    
        function createMask(evt) {
            let matrix = '+1 (___) ___-____';
            let i = 0;
            let def = matrix.replace(/\D/g, '');
            let val = this.value.replace(/\D/g, '');
    
            if (def.length >= val.length) {
                val = def;            
            }
    
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
                
            });
    
            if (evt.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }    
    }

    initForms() {
        for (const form of this.forms) {
            form.addEventListener('submit', (evt) => {
                evt.preventDefault();
    
                const formData = new FormData(form);
                const messageBox = document.createElement('div');    
                
                messageBox.textContent = this.message.loading;
                messageBox.style.cssText = `
                    margin: 15px;
                    font-size: 16px;
                    color: grey;
                    text-align: center;
                    border: 2px solid grey;
                `;
                form.parentElement.append(messageBox);
    
                this.sendForm(this.submitUrl, formData)            
                .then(response => {
                    this.currentMessage = this.message.success;                    
                    console.log(response);
                    return response;
                })            
                .catch(error => {
                    this.currentMessage = `${this.message.fail}: ${error}`;                    
                })
                .finally( () => {
                    messageBox.textContent = this.currentMessage;                    
                    setTimeout( () => {
                        messageBox.remove();
                        this.clearInputs();                        
                    }, 5000);
                });  
            });
        } 
        
        this.checkEmailInputs();
        this.checkEmailInputs();
        this.checkTelInputs();
    }
}