/* Made by Triple3Apple */

function ageInMinutes() {
  var birthYear = prompt("What year were you born on?");

  let currYear = new Date().getFullYear();

  if (!Number.isInteger(currYear) || birthYear > currYear) {
    alert("Please Enter a Valid Year");
    return;
  }

  var minutes = (currYear - birthYear) * 365 * 1440;

  console.log("Age in Minutes: " + minutes);

  var h3result = document.createElement("h3");

  var text1 = document.createTextNode("You are approximatly ");
  var text2 = document.createTextNode(" days old!");

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
