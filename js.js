function roll() {
    var random1 = Math.floor(Math.random() * 6) + 1; //1-6

    var randomDI = "dice" + random1 + ".png"; //dice1.png - dice6.png

    var randomIS = "images/" + randomDI; //images/dice1.png - images/dice6.png

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomIS);


    var random2 = Math.floor(Math.random() * 6) + 1;

    var randomIS2 = "images/dice" + random2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomIS2);


    //If player 1 wins
    if (random1 > random2) {
      document.querySelector("h1").innerHTML = " Player 1 Wins!";
    }
    else if (random2 > random1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! ";
    }
    else {
      document.querySelector("h1").innerHTML = "Draw!";
    }

}
document.getElementById("roll").onclick = function() { roll(); };