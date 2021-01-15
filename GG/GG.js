var nmr = 0;
var LL = 0;
var HL = 10;

var answer = Math.floor(Math.random() * (HL - LL + 1)) + LL;
var guess = "";

var PBtn = document.getElementById("myBtn");
PBtn.addEventListener("click", doFunction);


function doFunction() {
    var guessStr = prompt("Guess the secret number between 0 and 10(including 10)");
    if (guessStr === null) {
        return;
    }
    var guess = parseInt(guessStr);

    if (!guess) {
        alert("thats not a number");
        return doFunction();
    }


    while (answer !== guess) {

        if (guess < answer) {
            alert(guessStr + " " + "is too low");
        } else if (guess > answer) {
            alert(guessStr + " " + "is too high")

        }
        guessStr = prompt("try again", guess);
        guess = parseInt(guessStr);
    }
    alert(guessStr + " " + "is" + " " + "correct");
    return;
}