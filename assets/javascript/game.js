// GLOBAL FUNCTIONS
// ===========================================================OBAL VARIABLES
// Arrays and variables for handling data
var wordPossib = ["bermuda", "ghana", "california", "greece", "guinea"];
var selectWord = "";
var lettersinWord = [];
var numBlank = 0;
var correctOne = [];
var wrongOne = [];
var wordGuessDiv = document.getElementById("wordGuess")
var manyGuessLeft = document.getElementById("quantityGuesses")
var winCounterNum = document.getElementById("winCount")
var lossCounterNum = document.getElementById("lossCount")
var wrongGuessDiv = document.getElementById("letGuesses")
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
    wordGuessDiv.innerHTML = correctOne.join("  ");
    manyGuessLeft.innerHTML = guessesLeft;
    winCounterNum.innerHTML = winCount;
    lossCounterNum.innerHTML = lossCount;
    wrongGuessDiv.innerHTML = wrongOne;

    //tests

    console.log(selectWord);
    console.log(lettersinWord);
    console.log(numBlank);
    console.log(correctOne);


}


function checkLetters(letter) {

    var letterThere = false;
    for (var i = 0; i < numBlank; i++) {
        if (selectWord[i].toUpperCase() == letter) {
            console.log("CORRECT!")
            correctOne[i] = letter;
            letterThere = true;
        }
    }





    //where letter is and populate in blanks
    // if (letterThere) {

    //     for (var i = 0; i < numBlank; i++) {
    //         if (selectWord[i] == letter) {
    //             correctOne[i] = letter;
    //         }
    //     }
    // }




    //wrong letter
    if (!letterThere) {
        wrongOne.push(letter);
        guessesLeft--
    }

    wordGuessDiv.innerHTML = correctOne.join("  ");
    manyGuessLeft.innerHTML = guessesLeft;
    winCounterNum.innerHTML = winCount;
    lossCounterNum.innerHTML = lossCount;
    wrongGuessDiv.innerHTML = wrongOne;


}


function roundComplete() {
    console.log("Win Count: " + winCount + "|  Loss Count: " + lossCount + "|  Guesses Left: " + guessesLeft);
    console.log({ correctOne, wrongOne })
    //winner
    // check if won
    if (lettersinWord.toString().toUpperCase() == correctOne.toString()) {
        winCount++;


        winCounterNum.innerHTML = winCount;
        alert("Winner, WINNER, vegan dinner! Your next stop is " + selectWord.toUpperCase() + "!");
        startGame();


    }

    // if user lost

    else if (guessesLeft == 0) {

        lossCount++;
        alert("Awwww sucks to suck, TRY AGAIN!")

        lossCounterNum.innerHTML = lossCount;

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
    roundComplete();
    console.log(letterGuess);
}