// 4. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

var array = [];
var numero;

while(sommaArray(array) < 50) {
  numero = parseInt(prompt("Inserisci un numero"));
  if(!isNaN(numero)) {
    array.push(numero);
  }
}

console.log(sommaArray(array))


// Funzioni
function sommaArray(arrayParam) {

  var somma = 0;

  for(var i = 0; i < arrayParam.length; i++) {
    somma += arrayParam[i];
  }

  return somma;
}
