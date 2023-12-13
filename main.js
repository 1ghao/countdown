const startMinutes = 0.05;
let time = startMinutes * 60;

const countdownParragraph = document.getElementById("countdown");

setInterval(updateCountdown, 1000)

function playAlarm() {
    let alarmSound = new Audio("alarm.wav");
    alarmSound.play();
}

function updateCountdown() {
    if (time >= 0) {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownParragraph.innerHTML = `${minutes}:${seconds}`;
        time--;
    } else {
        setInterval(playAlarm, 1000);
        countdownParragraph.innerHTML = "Time's up ⏰⏰⏰";
    }
}


