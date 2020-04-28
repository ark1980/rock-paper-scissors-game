let userScoreInit = 0;
let compScoreInit = 0;
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("comp-score");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const result = document.querySelector("#result");

const compChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}


const win = (userChoice, compChoice) => {
  userScoreInit++;
  userScore.innerText = userScoreInit;
  result.innerText = `You Win!🔥, ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} Beats ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)}`;
  document.getElementById(userChoice).classList.add("win");
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove("win");
  }, 300)
}

const loss = (userChoice, compChoice) => {
  compScoreInit++;
  compScore.innerText = compScoreInit;
  result.innerText = `You lost!💩, ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} Beats ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;
  document.getElementById(userChoice).classList.add("loss");
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove("loss");
  }, 300)
}

const draw = (userChoice) => {
  result.innerText = `It's a Draw😉`;
  document.getElementById(userChoice).classList.add("draw");
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove("draw");
  }, 300)
}

const game = (userChoice) => {
  const computerChoice = compChoice();
  switch(userChoice + computerChoice) {
    //win
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    // loss
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      loss(userChoice, computerChoice);
      break;
    // draw
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

const main = () => {
  scissors.addEventListener("click", function() {
    game("scissors");
  })
  
  rock.addEventListener("click", function() {
    game("rock")
  })
  
  paper.addEventListener("click", function() {
    game("paper")
  })
}

main();

