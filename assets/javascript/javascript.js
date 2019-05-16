
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];
var userWin = 0;
var computerWin = 0;
var tie = 0;


document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    alert("User guess: " + userGuess);
    alert("Computer guess: " + computerGuess);
    
    if (userGuess=='r' && computerGuess=='r' || userGuess=='s' && computerGuess =='s' || userGuess=='p' && computerGuess=='p'){
    //TIE
    alert(`It's a tie!`);
    document.getElementById("tieHTML").innerHTML = ++tie;

    } else if (userGuess=='r' && computerGuess=='s' || userGuess=='p' && computerGuess=='r' || userGuess=='s' && computerGuess=='p'){
    //USER WINS
    alert('You WIN!');
    document.getElementById("userWins").innerHTML = ++userWin;

    } else if (computerGuess=='r' && userGuess=='s' || computerGuess=='p' && userGuess=='r' || computerGuess=='s' && userGuess=='p'){
    //COMPUTER WINS 
    alert('Computer wins :(');
    document.getElementById("computerWins").innerHTML = ++computerWin;

    } else {
    //WRONG KEY
    alert('Please choose a valid choice.');
    }
};