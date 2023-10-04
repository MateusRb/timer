let timerInterval;
let running = false;
let remainingSeconds = 0;

const timerDisplay = document.getElementById("timer");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const minutesInput = document.getElementById("minutesInput");

function startStop() {
    if (running) {
        clearInterval(timerInterval);
        startStopButton.textContent = "Iniciar";
    } else {
        remainingSeconds = parseInt(minutesInput.value) * 60;
        if (remainingSeconds <= 0 || isNaN(remainingSeconds)) {
            alert("Digite um valor válido para os minutos.");
            return;
        }
        timerInterval = setInterval(updateTimer, 1000);
        startStopButton.textContent = "Parar";
    }
    running = !running;
}

function reset() {
    clearInterval(timerInterval);
    running = false;
    remainingSeconds = 0;
    updateDisplay();
    startStopButton.textContent = "Iniciar";
}

function updateTimer() {
    if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        running = false;
        startStopButton.textContent = "Iniciar";
    } else {
        remainingSeconds--;
    }
    updateDisplay();
}

function updateDisplay() {
    const displayHours = Math.floor(remainingSeconds / 3600);
    const displayMinutes = Math.floor((remainingSeconds % 3600) / 60);
    const displaySeconds = remainingSeconds % 60;
    timerDisplay.textContent = `${String(displayHours).padStart(2, "0")}:${String(displayMinutes).padStart(2, "0")}:${String(displaySeconds).padStart(2, "0")}`;
}

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);

