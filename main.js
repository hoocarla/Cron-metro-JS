//selecionando os elementos:

const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

//eventos ao acionar os botões: 

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

// função pra iniciar o cronometro: 

function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) { //verifica se está pausado.
      milliseconds += 10;
      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      minutesEl.textContent = formatTime(minutes); 
      secondsEl.textContent = formatTime(seconds);
      millisecondsEl.textContent = formatMilliseconds(milliseconds);
    }
  }, 10);

//escondo o botao de iniciar e faço surgir o de pausar:
startBtn.style.display = "none";
pauseBtn.style.display = "block";
}

//função para pausar o tempo:

function pauseTimer(){
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
}

//função para ativar depois de pausar:
function resumeTimer(){
  isPaused = false;
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
}

//função para resetar o cronometro:
//limpa o intervalo
function resetTimer() {
  clearInterval(interval)
  //zerei variaveis
  minutes=0;
  seconds=0;
  milliseconds=0;
  isPaused = false;
//zerei visual
  minutesEl.textContent="00"
  secondsEl.textContent="00"
  millisecondsEl.textContent="000"

//zerei botoes
  startBtn.style.display="inline-block";
  pauseBtn.style.display="none";
  resumeBtn.style.display="none";
}

function formatTime(time) {
  return time < 10 ? `0${time}`: time;
}


function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
