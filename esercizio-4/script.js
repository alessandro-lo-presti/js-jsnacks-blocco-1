// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

var primoNumero = parseInt(prompt("Inserire un numero"));
var secondoNumero = parseInt(prompt("Inserire un numero"));

if(primoNumero > secondoNumero)
  console.log("Il maggiore è " + primoNumero);
else
  console.log("Il maggiore è " + secondoNumero);
