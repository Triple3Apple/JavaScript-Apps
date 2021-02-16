/* Made by Triple3Apple */

function ageInMinutes() {
  //var birthYear = prompt("What year were you born on?");

  var birthYear = document.getElementById("year-input").value;

  let currYear = new Date().getFullYear();

  // validating input
  if (
    birthYear > currYear ||
    birthYear < 0 ||
    birthYear == null ||
    birthYear == ""
  ) {
    alert("Please Enter a Valid Year");
    return;
  }

  console.log(birthYear);

  reset();

  var minutes = (currYear - birthYear) * 365 * 1440;
  console.log("Age in Minutes: " + minutes);

  var h3result = document.createElement("h3");
  var text1 = document.createTextNode("You are approximatly ");
  var text2 = document.createTextNode(" minutes old!");
  var resultSpan = document.createElement("span");

  /* .toLocaleString("en") converts number to string number with commas */
  resultSpan.innerText = minutes.toLocaleString("en");

  /* The span will have a class called: "result-span" */
  resultSpan.setAttribute("class", "result-span");

  h3result.setAttribute("id", "ageInMinutes");

  h3result.appendChild(text1);
  h3result.appendChild(resultSpan);
  h3result.appendChild(text2);

  document.getElementById("age-result").appendChild(h3result);
}

function reset() {
  let elementToRemove = document.getElementById("ageInMinutes");

  if (elementToRemove != null) {
    elementToRemove.remove();
  }
}

function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("cat-gif-flexbox");
  var t = new Date().getTime();
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&timestamp=" + t;
  div.appendChild(image);
}

function removeCats() {
  var div = document.getElementById("cat-gif-flexbox");
  // remove all cat gifs

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function rpsGame(rpsChoice) {
  // gets html id of object that was passed
  console.log(rpsChoice.id);

  var humanChoice, computerChoice;
  humanChoice = rpsChoice.id;

  computerChoice = getComputerChoice();

  console.log("pc choice: " + computerChoice);

  var result = decideRPSWinner(humanChoice, computerChoice);

  // use display winner/score to user

  var playerScoreSpan = document.getElementById("player-score-span");
  var computerScoreSpan = document.getElementById("computer-score-span");

  var currPlayerScore = Number(playerScoreSpan.textContent);
  console.log("current player score: " + currPlayerScore);

  var currComputerScore = Number(computerScoreSpan.textContent);

  switch (result * 10) {
    case 0:
      computerScoreSpan.textContent = (currComputerScore + 1).toString();
      console.log("player lost");
      break;
    case 5:
      // do nothing..
      break;
    case 10:
      playerScoreSpan.textContent = (currPlayerScore + 1).toString();
      console.log("player won");
      break;
    default:
      console.error("error");
      break;
  }

  displayRpsResults(humanChoice, computerChoice, result);
}

function getComputerChoice() {
  var randNum = getRandInteger(0, 3);

  switch (randNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
    default:
      console.error("error in rpsGame()");
      return;
  }
}

// 1 = win, 0.5 = tie, 0 = lose
function decideRPSWinner(humChoice, compChoice) {
  var rpsDatabase = {
    rock: { rock: 0.5, paper: 0, scissor: 1 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { rock: 0, paper: 1, scissor: 0.5 },
  };

  var playerScore = rpsDatabase[humChoice][compChoice];

  console.log("player score: " + playerScore);
  return playerScore;
}

function displayRpsResults(humChoice, compChoice, rpsResult) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src,
  };

  // remove all images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  var playerImg = document.createElement("img");
  var computerImg = document.createElement("img");

  playerImg.src = imageDatabase[humChoice];
  playerImg.setAttribute("id", "player-rps-img");
  computerImg.src = imageDatabase[compChoice];
  computerImg.setAttribute("id", "computer-rps-img");

  var messageh3 = document.createElement("h3");
  // write correct message to player
  if (rpsResult == 0) {
    messageh3.innerText = "You Lose!";
    // ** lets us change the color via style attribute **
    messageh3.setAttribute("style", "color: red");
  } else if (rpsResult == 0.5) {
    messageh3.innerText = "Tie!";
  } else {
    messageh3.innerText = "You Win!";
    messageh3.setAttribute("style", "color: green");
  }

  var rpsFlexDiv = document.getElementById("rps-img-flexbox");

  rpsFlexDiv.appendChild(playerImg);
  rpsFlexDiv.appendChild(messageh3);
  rpsFlexDiv.appendChild(computerImg);
}

function nextRpsGame() {
  // remove all old images
  var div = document.getElementById("rps-img-flexbox");
  // remove all cat gifs

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // add new images
  var rockImg = document.createElement("img");
  var paperImg = document.createElement("img");
  var scissorImg = document.createElement("img");

  // adding attributes to image elements
  rockImg.setAttribute("id", "rock");
  rockImg.setAttribute("class", "rps-image");
  rockImg.setAttribute("alt", "rock");
  rockImg.setAttribute("onclick", "rpsGame(this)");
  rockImg.src = "./static/img/rock.png";

  paperImg.setAttribute("id", "paper");
  paperImg.setAttribute("class", "rps-image");
  paperImg.setAttribute("alt", "paper");
  paperImg.setAttribute("onclick", "rpsGame(this)");
  paperImg.src = "./static/img/paper.png";

  scissorImg.setAttribute("id", "scissor");
  scissorImg.setAttribute("class", "rps-image");
  scissorImg.setAttribute("alt", "scissor");
  scissorImg.setAttribute("onclick", "rpsGame(this)");
  scissorImg.src = "./static/img/scissors.png";

  var rpsFlexDiv = document.getElementById("rps-img-flexbox");

  rpsFlexDiv.appendChild(rockImg);
  rpsFlexDiv.appendChild(paperImg);
  rpsFlexDiv.appendChild(scissorImg);

  // <img src="/static/images/rock.png" class="rps-image" id="rock" alt="rock" onclick="rpsGame(this)"></img>
}

function resetRpsGame() {
  // reset scores to 0
  document.getElementById("player-score-span").textContent = 0;
  document.getElementById("computer-score-span").textContent = 0;

  nextRpsGame();
}

function getRandInteger(min, max) {
  return Math.floor(Math.random() * max) + min;
}
