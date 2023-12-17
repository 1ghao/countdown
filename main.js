let countdownMinutes = document.querySelector("#minutes");
let countdownSeconds = document.querySelector("#seconds");
let time = parseInt(countdownMinutes.innerHTML) * 60 + parseInt(countdownSeconds.innerHTML) - 1;
let minutes = countdownMinutes.innerHTML;
let seconds = countdownSeconds.innerHTML;

const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");



// minutes selector 

countdownMinutes.addEventListener("click", e => {
    do {
        countdownMinutes.innerHTML = parseInt(prompt("Minutes:"));
        
        time = parseInt(countdownMinutes.innerHTML) * 60 + parseInt(countdownSeconds.innerHTML) - 1;
        
        minutes = countdownMinutes.innerHTML;
        seconds = countdownSeconds.innerHTML;
    } while (countdownMinutes.innerHTML < 0 || countdownMinutes.innerHTML == "NaN");
})



// seconds selector 

countdownSeconds.addEventListener("click", e => {
    do {
        countdownSeconds.innerHTML = parseInt(prompt("Seconds:"));
        countdownSeconds.innerHTML = countdownSeconds.innerHTML < 10 ? "0" + countdownSeconds.innerHTML : countdownSeconds.innerHTML;

        time = parseInt(countdownMinutes.innerHTML) * 60 + parseInt(countdownSeconds.innerHTML) - 1;
        
        minutes = countdownMinutes.innerHTML;
        seconds = countdownSeconds.innerHTML;
    } while (countdownSeconds.innerHTML < 0 || countdownSeconds.innerHTML == "NaN");
})


// start button

let id; /*interval's id*/

startButton.addEventListener("click", e => {
    if (startButton.innerHTML == "Start") {
        id = setInterval(updateCountdown, 1000);
        startButton.innerHTML = "Stop"
    } else if (startButton.innerHTML == "Stop") {
        clearInterval(id);
        startButton.innerHTML = "Start"
    }
})


// reset button 


resetButton.addEventListener("click", e => {
    clearInterval(id);
    startButton.innerHTML = "Start"
    countdownMinutes.innerHTML = minutes;
    countdownSeconds.innerHTML = seconds;
    time = parseInt(countdownMinutes.innerHTML) * 60 + parseInt(countdownSeconds.innerHTML);
})




// alarm sound function 

const playAlarm = () => {
    setTimeout(
        function() {
            let alarmSound = new Audio("alarm.wav")
            alarmSound.play()
        }, 500);
}


// count down function 

const updateCountdown = () => {
    if (time > 0) {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownMinutes.innerHTML = `${minutes}`;
        countdownSeconds.innerHTML = `${seconds}`;
        time--;
    } else if (time == 0) {
        time--;
        playAlarm();
        countdownParagraph.innerHTML = `Time's up!!!`

    }
}

