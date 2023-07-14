const clicker = document.querySelector(".js-box");
const mySpan = document.querySelector(".js-clicker");


let clicks = 0;

function onClick() {
    clicks += 1;

    mySpan.textContent = clicks;

}

clicker.addEventListener('click', onClick);


const myTimer = document.getElementById('timer');

let seconds = 59;

function timer(event) {
     seconds -= 1;
    myTimer.textContent = `:${seconds}`;
}

myTimer.addEventListener('click', timer, onClick);