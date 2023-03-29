"use strict";

const sons = {
  // KEY: 'VALUE'
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tink.wav",
};

const criarDiv = (texto) => {
  const div = document.createElement("div");

  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

// O Object.keys()método estático retorna uma matriz de nomes de propriedade de chave de string enumeráveis ​​do próprio objeto.

// Se você precisar dos valores de propriedade, use Object.values()

// Se você precisar de chaves e valores de propriedade, use Object.entries().

const exibir = (sons) => {
  // console.log(Object.keys(sons));
  // console.log(Object.values(sons));
  Object.keys(sons).forEach(criarDiv);
};

const tocarSom = (letra) => {
  const audio = new Audio(`./sounds/${sons[letra]}`);
  audio.play();
};

const adicionarEfeito = (letra) =>
  document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removerActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removerActive);
};

const ativarDiv = (ev) => {
  const letra = ev.type == "click" ? ev.target.id : ev.key.toUpperCase();

  const letraPermitida = sons.hasOwnProperty(letra);
  if (letraPermitida) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
  }
};

exibir(sons);

document.getElementById("container").addEventListener("click", ativarDiv);

window.addEventListener("keydown", ativarDiv);
