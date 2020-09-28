const text = ['RATION', 'Sir Optization is processing from the home computer of sksingh lenovo','your ai is ready to talk!'];
const texts = ['RATION', 'Sir Optization is processing from the home computer of sksingh lenovo','your ai is ready to talk!'];
let count = 0;
let index = 0;
let currentext = '';
let letter = '';

(function type(){
    if(count === text.length){
        count = 0;
    }
    currentext = text[count];
    letter = currentext.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentext.length){
        count++;
        index = 0;
    }
    setTimeout(type, 100);
}());
(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentext = texts[count];
    letter = currentext.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentext.length){
        count++;
        index = 0;
    }
    setTimeout(type, 100);
}());

