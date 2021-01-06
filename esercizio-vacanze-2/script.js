// 2. Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.

var punteggioComputer = 0;
var punteggioUtente = 0;
var segnoComputer;
var debolezzaUtente;

while(punteggioComputer < 4 && punteggioUtente < 4) {

  segnoComputer = lancioComputer();
  debolezzaUtente = debolezzaSegno(prompt("Carta, Forbice o Sasso?").toLowerCase());

  // Errore inserimento
  if(debolezzaUtente == -1) {
    console.log("Errore nell'inserimento. Riprova");
  }
  // Mano persa
  else if(debolezzaUtente == segnoComputer) {
    punteggioComputer++;
    console.log("Mano vinta dal computer");
  }
  // Pareggio
  else if(debolezzaUtente == debolezzaSegno(segnoComputer)) {
    console.log("Mano pari");
  }
  // Mano vinta
  else {
    punteggioUtente++;
    console.log("Hai vinto la mano");
  }
}

if(punteggioComputer == 4) {
  console.log("Hai perso la partita");
}
else {
  console.log("Hai vinto la partita");
}

// Funzioni
function lancioComputer() {
  switch(Math.floor(Math.random() * 3)) {
    case 0: {
      return "sasso";
    }
    case 1: {
      return "carta";
    }
    default: {
      return "forbice";
    }
  }
}

function debolezzaSegno(segno) {
  if(segno == "sasso") {
    return "carta";
  }
  else if(segno == "carta") {
    return "forbice";
  }
  else if(segno == "forbice") {
    return "sasso";
  }
  else {
    return -1;
  }
}
