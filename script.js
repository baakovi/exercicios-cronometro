// console.log("Olá mundo!")

// Pegar o elemento do exercício
// querySelector seleciona apenas um elemento com essa classe
// const elemsExercicio = document.querySelector(".exercicio");
const elemsExercicio = document.querySelectorAll(".exercicio");
// Returns the first element that is a descendant of node that matches selectors.
// console.log(elementoExercicio)

// addEventListener ==> escutar um evento
const elemTela = document.querySelector(".tela");
//   .addEventListener("click", console.log("Clicou!"));

const elemVoltar = document.querySelector(".voltar");

const elemClose = document.querySelector(".close");
const elemPlay = document.querySelector(".play");
const elemPause = document.querySelector(".pause");
const elemCronometro = document.querySelector(".cronometro");

const elemHorario = document.querySelector(".horario");

const elemMinuto = document.querySelector(".minuto");
const elemSegundo = document.querySelector(".segundo");
const elemCentesimo = document.querySelector(".centesimo");

let timer = 0;
let idIntervalo = null;

// Adicionar classe tela--cronometro
elemsExercicio.forEach(function (elemExercicio) {
  // Para cada exercício, execute tal coisa
  elemExercicio.addEventListener("click", function () {
    elemTela.classList.add("tela--cronometro");

    // console.log("Clicou!");
  });
});

// elemsExercicio[1].addEventListener("click", function() {
//   elemTela.classList.add("tela--cronometro");
// });

// elemsExercicio[2].addEventListener("click", function() {
//   elemTela.classList.add("tela--cronometro");
// });

elemVoltar.addEventListener("click", function () {
  elemTela.classList.remove("tela--cronometro");

  elemCronometro.classList.remove("iniciou");

  clearInterval(idIntervalo);
  timer = 0;
  atualizarCronometro();
});

// Adicionar classe iniciou
function clicouClose() {
  elemCronometro.classList.remove("iniciou");

  clearInterval(idIntervalo);
  timer = 0;
  atualizarCronometro();
}

elemClose.addEventListener("click", function () {
  clicouClose();
});

function clicouPlay() {
  elemCronometro.classList.add("iniciou");

  rodarTimer();
}

elemPlay.addEventListener("click", function() {
  clicouPlay();
});

function clicouPause() {
  elemCronometro.classList.remove("iniciou");

  clearInterval(idIntervalo);
}

elemPause.addEventListener("click", function() {
  clicouPause();
});

// Atualizar horário
function atualizarHorario() {
  const horas = new Date().getHours().toString().padStart(2, "0");
  const minutos = new Date().getMinutes().toString().padStart(2, "0");

  const horario = horas + ":" + minutos;

  elemHorario.innerText = horario;
  // console.log(horario)
}

// atualizarHorario();

// Cria um modelo de função que executa uma certa função em um intervalo determinado.
// let segundo = 1
// setInterval(() => {
//   if (segundo >= 2) {
//     console.log(`Passou ${segundo} segundos`)
//   }
//   else {
//     console.log(`Passou ${segundo} segundo`)
//   }
//   return segundo += 1
// }, 1000);
// interval em milésimos

atualizarHorario();

setInterval(() => {
  atualizarHorario();
}, 1000);

// Construindo o cronômetro
function rodarTimer() {
  idIntervalo = setInterval(() => {
    timer = timer + 10;
    // console.log(timer);
    atualizarCronometro();
  }, 10);
}

// Clear interval ==> limpar o setInterval
// clearInterval(2);

function atualizarCronometro() {
  const minutos = Math.floor(timer / 60000)
    .toString()
    .padStart(2, "0");

  const segundos = Math.floor((timer % 60000) / 1000)
    .toString()
    .padStart(2, "0");

  const centesimos = Math.floor(((timer % 60000) % 1000) / 10)
    .toString()
    .padStart(2, "0");

  const tempoCronometro = minutos + ":" + segundos + "," + centesimos;

  elemMinuto.innerText = minutos;
  elemSegundo.innerText = segundos;
  elemCentesimo.innerText = centesimos;

  // console.log(tempoCronometro);
}
