// Array de heróis
let herois = [
  { nome: "Wolverine", XP: 8500 },
  { nome: "Gambit", XP: 5000 },
  { nome: "Storm", XP: 7000 },
  { nome: "Rogue", XP: 9500 },
  { nome: "Beast", XP: 3000 },
  { nome: "Cyclops", XP: 11000 },
];

// Função para determinar o nível baseado no XP
function determinarNivel(XP) {
  let nivel;
  if (XP < 1000) {
    nivel = "Ferro";
  } else if (XP >= 1001 && XP <= 2000) {
    nivel = "Bronze";
  } else if (XP >= 2001 && XP <= 5000) {
    nivel = "Prata";
  } else if (XP >= 5001 && XP <= 7000) {
    nivel = "Ouro";
  } else if (XP >= 7001 && XP <= 8000) {
    nivel = "Platina";
  } else if (XP >= 8001 && XP <= 9000) {
    nivel = "Ascendente";
  } else if (XP >= 9001 && XP <= 10000) {
    nivel = "Imortal";
  } else if (XP >= 10001) {
    nivel = "Radiante";
  }
  return nivel;
}

// Loop para exibir a mensagem para cada um
for (let heroi of herois) {
  let nivel = determinarNivel(heroi.XP);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
