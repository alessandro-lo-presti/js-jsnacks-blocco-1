// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var array = [];
var input;

for(var i = 0; i < 6; i++) {
  input = parseInt(prompt("Inserisci un numero"));
  if(input % 2 != 0) {
    array.push(input);
  }
}

console.log(array);
