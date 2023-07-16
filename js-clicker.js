const button = document.getElementById("js-button");
const counter = document.getElementById("counter");

const timer = document.getElementById("timer");

let sum = 0;


function onClick(){
  sum +=1;

  counter.textContent = sum;
  
  
};



function startTimer() {
  let timeLeft = 30;

  const interval = setInterval(function () {
    timeLeft -= 1;
    timer.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(interval);
      timer.textContent = "Time is up!";
      
      button.disabled = true;

      alert(`Congrats your score: ${counter.textContent}`)
    }

    return;
},1000)

}

const click = button.addEventListener("click", onClick);
const timerStart = button.addEventListener("click", startTimer, {once: true});