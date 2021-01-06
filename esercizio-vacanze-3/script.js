/*
3. Realizzare (utilizzando i cicli for) una piramide di asterischi come questa:
     *
    ***
   *****
  *******
 *********
***********
 */

var array = [0,0,0,0,0,0,0,0,0,0,0];

for(var i = 0; i < 6; i++) {
  array[5 + i] = 1;
  array[5 - i] = 1;
  console.log(ottieniRiga(array));
}

// Funzioni
function ottieniRiga(arrayParam) {
  var riga = "";

  for(var i = 0; i < arrayParam.length; i++) {
    if(arrayParam[i] == 1) {
      riga += "*";
    }
    else {
      riga += " ";
    }
  }

  return riga;
}
