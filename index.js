//RandomNumber1
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImageSource1);
//RandomNumber2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImageSource2);
//DecitionMaking
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 wins!🚩";
} else document.querySelector("h1").innerHTML = "Draw!";
