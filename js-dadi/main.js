// Gioco dei Dadi - Player vs PC.

//Generare un numero a caso da 1 a 6 per il giocatore e per il pc (AI).

let player, megatron;

//Alert per l'inizio del gioco
player = alert("Clicca qui per iniziare il Gioco!");

// EventListener
addEventListener("click ", player);
player = Math.floor(Math.random() * 6 + 1);
pc = Math.floor(Math.random() * 6 + 1);

console.log(player, megatron);

//Determinare il vincitore in base al numero

messageAllert = "è un pareggio!";

if (player > megatron) {
  document.getElementById("dice-game").classList.add("greentext");
  messageAllert = "hai vinto !";
} else if (player < megatron) {
  document.getElementById("dice-game").classList.add("redtext");
  message = "Il tuo pianeta verrà distrutto!";
}

document.getElementById("dice-game").innerHTML = messageAllert;
