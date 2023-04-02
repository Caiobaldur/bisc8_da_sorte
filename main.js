const screen1 = document.querySelector("screen1")
const screen2 = document.querySelector("screen2")


function handleClick(event) {
  event.preventDefault()


}

let frases = [
  "A vida trará coisas boas se tiveres paciência.",
  "Não há nada que impeça quando Deus quer agir.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A torre mais firme é solidificada sob a rocha que é Cristo",
  "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
  "As dificuldades são oportunidades disfarçadas.",
  "Preste atenção aos pequenos problemas antes que eles se tornem grandes demais.",
  "Você é do tamanho do seu sonho.",
  "Não deixe que os seus medos tomem o lugar dos seus sonhos.",
  "O maior homem do mundo é aquele que se faz pequeno diante da grandeza dos outros.",
  "Realize o óbvio, pense no improvável e conquiste o impossível.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "A coragem não é ausência do medo; é a persistência apesar do medo.",
  "A verdadeira felicidade é ter um propósito de vida.",
  "Você não é derrotado quando perde. Você é derrotado quando desiste."
];

function escolherFrase() {
  let indice = Math.floor(Math.random() * frases.length);
  return frases[indice];
}

function trocarTela() {
  let screen1 = document.querySelector(".screen1");
  let screen2 = document.querySelector(".screen2");
  let fraseSorte = document.querySelector("#fraseSorte");
  
  fraseSorte.innerHTML = escolherFrase();
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
}

function abrirBiscoito() {
  let screen1 = document.querySelector(".screen1");
  let screen2 = document.querySelector(".screen2");

  screen2.classList.add("hide");
  screen1.classList.remove("hide");
}