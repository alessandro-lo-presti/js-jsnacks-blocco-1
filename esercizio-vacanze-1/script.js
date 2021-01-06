// 1. Realizziamo il classico gioco indovina numero in JavaScript
// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
// Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.
// Bonus: provate 3 livelli di complessità

var numeroComputer = generaNumero();
var numeroScelto = 0;

while(numeroScelto != numeroComputer) {
  numeroScelto = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
  if(numeroScelto <= 0 || numeroScelto > 100 || isNaN(numeroScelto)) {
    console.log("Devi inserire un numero tra 1 e 100");
  }
  else if(numeroScelto < numeroComputer) {
    console.log("Il numero inserito è più basso del numero da indovinare");
  }
  else if(numeroScelto > numeroComputer) {
    console.log("Il numero inserito è più alto del numero da indovinare");
  }
  else {
    console.log("Hai vinto");
  }
}

// Funzioni
function generaNumero() {
  return Math.floor(Math.random() * 100) + 1;
}
