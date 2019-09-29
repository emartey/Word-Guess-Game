// GLOBAL FUNCTIONS
// ===========================================================OBAL VARIABLES
// Arrays and variables for handling data
var wordPossib = ["bermuda", "ghana", "california", "greece", "guinea"];
var selectWord = "";
var lettersinWord = [];
var numBlank = 0;
var correctOne = [];
var wrongOne = [];

// Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 15;

// FUNCTIONS
// ===========================================================
function startGame() {
    selectWord = wordPossib[Math.floor(Math.random() * wordPossib.length)];
    lettersinWord = selectWord.split("");
    numBlank = lettersinWord.length;


    //defaults
    guessesLeft = 15;
    wrongOne = [];
    correctOne = [];

    //Pop blanks and successes with right number of blank.
    for (var i = 0; i < numBlank; i++) {
        correctOne.push("_");
    }

    // Change HTML
    document.getElementById("wordGuess").innerHTML = correctOne.join(" ");
    document.getElementById("quantityGuesses").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("lossCount").innerHTML = lossCount;


    //tests
    console.log(wordPossib);
    console.log(selectWord);
    console.log(lettersinWord);
    console.log(numBlank);
    console.log(correctOne);

}

function checkLetters(letter) {

    var lettersinWord = false;
    for (var i = 0; i < numBlank; i++) {

        if (selectWord[i] == letter) {
            correctOne == true;
        }
    }

    //where letter is and populate in blanks
    if (lettersinWord) {

        for (var i = 0; i < numBlank; i++) {
            if (selectWord[i] == letter) {
                correctOne[i] = letter;
            }
        }
    }


    //wrong letter
    else {
        wrongOne.push(letter);
        quantityGuesses--
    }
    console.log(correctOne);
    startGame();
}

function roundComplete() {
    console.log("Win Count: " + winCount + "| + Loss Count" + lossCount + "| + Guesses Left" + guessesLeft);

    //winner
    if (lettersinWord.toString() == correctOne.toString()) {
        winCount++;
        alert("Winner, WINNER, vegan dinner!")

        //counter in html
        document.getElementById("winCount").innerHTML = winCount;

        startGame();
    }

    // if user lost

    else if (guessesLeft == 0) {

        lossCount++;
        alert("Awwww sucks to suck, TRY AGAIN!")

        document.getElementById("lossCount").innerHTML = lossCount;
        startGame();
    }





}




// MAIN PROCESS

//starts the game
startGame();

// Register keyclicks
document.onkeyup = function (event) {
    var letterGuess = String.fromCharCode(event.keyCode).toUpperCase();
    checkLetters(letterGuess);
    roundComplete;
    console.log(letterGuess);
};