const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}

let playerScore = 0;
let computerScore = 0;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


function computerChoice() {
  i=  random(1,4)
  if (i === 1){ return ("rock")}
  if (i === 2){ return ("paper")}
  else {return("scissors")}

}




function playRound(computerplay){
  let playerSelection = prompt("Please make your choice", "")

if (playerSelection.toLowerCase() === "scissors" && computerplay === "paper"){
  playerScore++;
  alert ("paper")
    return ("you win")}
if(playerSelection.toLowerCase() === "scissors" && computerplay === "rock"){
  computerScore++;
  alert ("rock")
  return ("you lose")}
if(playerSelection.toLowerCase() === "scissors" && computerplay === "scissors"){
  alert ("scissors")
    return ("you draw")}
if(playerSelection.toLowerCase() === "rock" && computerplay === "scissors"){
  playerScore++;
  alert("scissors")
      return ("you win")}
if(playerSelection.toLowerCase() === "rock" && computerplay === "paper"){
  computerScore++;
  alert("paper")
    return ("you lose")}
if(playerSelection.toLowerCase() === "rock" && computerplay === "rock"){
  alert("rock")
      return ("you draw")}
if(playerSelection.toLowerCase() === "paper" && computerplay === "rock"){
  playerScore++;
  alert("rock")
        return ("you win")}
if(playerSelection.toLowerCase() === "paper" && computerplay === "paper"){
  alert("paper")
          return ("you draw")}
if(playerSelection.toLowerCase() === "paper" && computerplay === "scissors"){
  alert("scissors")
  computerScore++;
            return ("you lose")}
 
}


while (playerScore < 5 && computerScore < 5) {
  console.log(playRound( computerChoice()));
}
if (playerScore === 5){ alert("you win")}
if (computerScore === 5){ alert ("you loose")}

console.log(computerChoice())


