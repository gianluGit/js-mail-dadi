// creo un array contenente la lista delle mail valide
var listaMail = ["pippo@gmail.com", "gigino@gmail.com", "cetriolo@libero.it", "pluto@hotmail.it"];

// creo un prompt per far inserire all'utente la propria mail
var mailUtente = prompt("inserisci la tua mail");
var mailTrovata = false;

// creo un ciclo for per verificare se la mail scritta dall'utente è presente nel array
for (var i = 0; i < listaMail.length; i++) {
  if (mailUtente == listaMail[i]) {
    mailTrovata = true;
  }
}

if (mailTrovata == true) {
  document.getElementById('title').innerHTML = "La tua mail è valida";
} else {
  document.getElementById('title').innerHTML = "Mail non trovata";
}


// versione con .includes
// if (listaMail.includes(mailUtente)) {
//   document.getElementById('title').innerHTML = "La tua mail è valida"
//   console.log("Mail valida");
// } else {
//   document.getElementById('title').innerHTML = "Mail non trovata"
//   console.log("Mail non trovata");
// }
