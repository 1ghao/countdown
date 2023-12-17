const countdownMinutes = document.querySelector("#minutes");
const countdownSeconds = document.querySelector("#seconds");
const minutes = countdownMinutes.innerHTML;
const seconds = countdownSeconds.innerHTML;
let time = parseInt(countdownMinutes.innerHTML) * 60 + parseInt(countdownSeconds.innerHTML);


const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");


// start button event listener

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



resetButton.addEventListener("click", e => {
    clearInterval(id);
    startButton.innerHTML = "Start"
    countdownMinutes.innerHTML = 25;
    countdownSeconds.innerHTML = "00";
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

