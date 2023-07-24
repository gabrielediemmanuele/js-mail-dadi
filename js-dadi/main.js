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

document.getElementById("dice-game").innerHTML = messageAllert;

messageAllert = "è un pareggio!";

if (player > megatron) {
  messageAllert = "hai vinto !";
} else if (player < megatron) {
  message = "Il tuo pianeta verrà distrutto!";
}
