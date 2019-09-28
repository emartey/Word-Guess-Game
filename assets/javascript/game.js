// GLOBAL FUNCTIONS
// ===========================================================OBAL VARIABLES
// Arrays and variables for handling data
var wordPossib = ["bermuda", "ghana", "california", "greece", "guinea"];
var selectWord = "";
var lettersinWord = [];
var numBlank = 0;
var correctOne = [];
var wrongOne = [];

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 15;

// FUNCTIONS
// ===========================================================
function startGame() {
    selectWord = wordPossib[Math.floor(Math.random() * wordPossib.length)];
    lettersinWord = selectWord.split("");
    numBlank = lettersinWord.length;


    //reset
    guessesLeft = 15;
    wrongOne = [];
    correctOne = [];

    //Pop blanks and successes with right number of blank.
    for (var i = 0; i < numBlank; i++) {
        correctOne.push("_");
    }

    // Change HTML
    document.getElementById("word").innerHTML = correctOne.join(" ");
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





// MAIN PROCESS
startGame();