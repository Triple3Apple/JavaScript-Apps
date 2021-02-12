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
