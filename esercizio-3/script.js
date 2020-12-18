// terzo snack
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var array = ["Mario", "Pippo", "Andrea"];
var nome = prompt("Come ti chiami?");
nome = nome.charAt(0).toUpperCase() + nome.slice(1);

var messaggio = "non puoi partecipare alla festa";

for(var i = 0; i < array.length; i++) {
  if(array[i] == nome) {
    messaggio = "puoi partecipare alla festa";
  }
}

console.log(messaggio);
