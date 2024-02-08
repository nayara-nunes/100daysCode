// selecionando os botões e o timer
let timerClock = document.querySelector('.clock')
let buttonPressed = document.querySelectorAll('.btn');

let seconds=0;
let minutes=0;
let hours=0;
let timer; 


buttonPressed.forEach(button =>{
  button.addEventListener('click', function(event){
    //pegando o conteúdo dos botões texto
    const buttonText = event.target.textContent.toLowerCase();
    if(buttonText === 'start'){
      startTime();
    }else if(buttonText === 'pause'){
      pauseTime();
    }else if(buttonText === 'stop'){
      stopTime();
    }
  });
});



// função start

let isStopped = false;

function startTime() {
  clearInterval(timer); // Limpa o intervalo atual antes de iniciar um novo
  timer = setInterval(function() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    timerClock.textContent = timerOnScreen();
  }, 1000);
}
function stopTime(){
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;

  timerClock.textContent = '00:00:00';
  //isStopped = true;
}

function pauseTime(){
  clearInterval(timer);
}

function timerOnScreen() {
 // Formatar para exibir dois dígitos para cada unidade de tempo
 const formattedTime = `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;
 return formattedTime;
}




