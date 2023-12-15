const startMinutes = 0.05;
const startSeconds = 0;
let time = startMinutes * 60;

const countdownParagraph = document.querySelector("#countdown");

const startButton = document.querySelector("#startButton");
const stopParagraph = document.querySelector("#stopParagraph");


let id;

startButton.addEventListener("click", e => {
    if (startButton.innerHTML == "Start") {
        id = setInterval(updateCountdown, 1000);
        startButton.innerHTML = "Stop"
    } else if (startButton.innerHTML == "Stop") {
        clearInterval(id);
        startButton.innerHTML = "Start"
        console.log(id);
    }
})


const playAlarm = () => {
    setTimeout(
        function() {
            let alarmSound = new Audio("alarm.wav")
            alarmSound.play()
        }, 500);
}

const updateCountdown = () => {
    if (time > 0) {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownParagraph.innerHTML = `${minutes}:${seconds}`;
        time--;
    } else if (time == 0) {
        time--;
        playAlarm();
        countdownParagraph.innerHTML = `Time's up!!!`

    }
}

const reset = () => {
    time
}

