let timer = 0;                                                  // Khoảng thời gian chênh lệch
let counter = 10;                                               // Biến đếm
const INTERVAL = 1000
const timerElement = document.querySelector('.timer-wrap');

function decreaseCounter(){
    timerElement.textContent = counter;
    counter = counter - 1;
}

function rePaint(currentTimer){
    if(timer <= currentTimer){
        timer = currentTimer + INTERVAL;
        console.log(timer);
        decreaseCounter();
    }

    if(counter > 0){
        requestAnimationFrame(rePaint)
    }
    else{
        timerElement.textContent = 0;
        document.querySelector('.btn-success').removeAttribute('disabled');
    }
}

rePaint();