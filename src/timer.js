import { formatError } from "./utils.js";
import "./howler.js"

const timerBtns = document.getElementById('timer_btns');
timerBtns.addEventListener('click', timerOnOff);
const timeLeft = document.getElementById('time_left'); // где будет выводиться на странице
let start; // для интервала

function timerOnOff(event) {
    let [minutes, seconds] = document.getElementById('user_time').value.match(/\d\d/g); // достаём из инпута время
    if (event.target.id == 'start') {
        start = setInterval(countdown, 1000);
    } if (event.target.id == 'stop') {
        clearInterval(start);
    }
    function countdown() {  // обратный отсчет
        timeLeft.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; //выводим в формате хх:хх
        seconds--;
        if (minutes > 0 && seconds == -1) { // минус минута когда секунд 0
            minutes--;
            seconds = 59;
        }
        if (minutes == 0 && seconds == -1) {  // автоматический стоп когда 00:00
            clearInterval(start);
            timeLeft.innerHTML = formatError("00:00 время вышло!");
            playSound();
        }
    }
}

function playSound() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = "./04038.mp3"; // Указываем путь к звуку "клика"
    audio.play(); // Автоматически запускаем
}