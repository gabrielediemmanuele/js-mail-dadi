/* Chiedere la mail all'untete */
let userMail = prompt("La tua E-Mail");
console.log(userMail);

/* Elenco delle mail valide */
const emailsList = [
  "bilbobeggins@rings.it",
  "harrypotter@hogwarts.com",
  "gabriele.diemmmanuele@outlook.it",
];

/* Esito  della risposta */
let outcomeLog = document.getElementById("outcome");

/* Esito Negativo */
outcomeLog.innerHTML = "Mi dispiace, la tua mail non è presente nel database!";

/* Controllo elenco mail */
for (let i = 0; i < emailsList.length; i++) {
  if (userMail === emailsList[i]) {
    // e se la mail inserita è corretta....
    let emailOk = "L'indirizzo e-mail inserito è corretto!";
    outcomeLog.innerHTML = emailOk;
  }
}
