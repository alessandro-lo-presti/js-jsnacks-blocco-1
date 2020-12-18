// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var primaStringa = prompt("Inserire una stringa");
var secondaStringa = prompt("Inserire una stringa");

if(primaStringa.length > secondaStringa.length)
  console.log("La stringa più lunga è " + primaStringa);
else if(secondaStringa.length > primaStringa.length)
  console.log("La stringa più lunga è " + secondaStringa);
else
  console.log("Le stringhe hanno la stessa lunghezza");
