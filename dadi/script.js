var btn = document.getElementById('lancio');

btn.addEventListener("click", function (){
  var giocatore = Math.floor(Math.random() * 6 +1);
  var com = Math.floor(Math.random() * 6 +1);

  console.log("il numero del giocatore è", giocatore);
  console.log("il numero del computer è", com);

  if (giocatore > com) {
    console.log("vince il giocatore");
  } else if (com > giocatore) {
    console.log("vince il computer");
  } else {
    console.log("pareggio");
  }
});
