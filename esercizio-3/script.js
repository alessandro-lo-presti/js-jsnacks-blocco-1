// terzo snack
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var array = ["Mario", "Pippo", "Andrea"];
var nome = prompt("Come ti chiami?");
nome = nome.charAt(0).toUpperCase() + nome.slice(1);

if(array.indexOf(nome) >= 0) {
  console.log("puoi partecipare alla festa")
}
else {
  console.log("non puoi partecipare alla festa")
}
