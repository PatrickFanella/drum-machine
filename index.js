const kick = new Audio('sounds/kick-bass.mp3');
const snare = new Audio('sounds/snare.mp3');
const crash = new Audio('sounds/crash.mp3');
const tom1 = new Audio('sounds/tom-1.mp3');
const tom2 = new Audio('sounds/tom-2.mp3');
const tom3 = new Audio('sounds/tom-3.mp3');
const tom4 = new Audio('sounds/tom-4.mp3');

document.onkeydown = function (e) {
    switch (e.key) {
        case 'w':
            kick.play();
            break;
        case 'a':
            snare.play();
            break;
        case 's':
            crash.play();
            break;
        case 'd':
            tom1.play();
            break;
        case 'j':
            tom2.play();
            break;
        case 'k':
            tom3.play();
            break;
        case 'l':
            tom4.play();
            break;

        default:
            break;
    }
    drumAnimation(e.key);
};

function drumAnimation(currentKey) {
    const key = document.querySelector('.'+ currentKey)
    key.classList.add('pressed')
    setTimeout(() => {
        key.classList.remove('pressed')
    }, 100);
}