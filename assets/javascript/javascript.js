
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];
var userWin = 0;
var computerWin = 0;
var tie = 0;


document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // alert("User guess: " + userGuess);
    // alert("Computer guess: " + computerGuess);
    
    if (userGuess=='r' && computerGuess=='r' || userGuess=='s' && computerGuess =='s' || userGuess=='p' && computerGuess=='p'){
    //TIE
    // alert(`It's a tie!`);
    document.getElementById("tieHTML").innerHTML = ++tie;
    // document.getElementById("tie").setAttribute(
    //     "style", 'animation: point-added; transition: 1.5s;');

    } else if (userGuess=='r' && computerGuess=='s' || userGuess=='p' && computerGuess=='r' || userGuess=='s' && computerGuess=='p'){
    //USER WINS
    // alert('You WIN!');
    document.getElementById("userWins").innerHTML = ++userWin;
    document.getElementById("userWins").setAttribute(
        "style", 'animation-name: point-added; transition: 1.5s;');

    } else if (computerGuess=='r' && userGuess=='s' || computerGuess=='p' && userGuess=='r' || computerGuess=='s' && userGuess=='p'){
    //COMPUTER WINS 
    // alert('Computer wins :(');
    document.getElementById("computerWins").innerHTML = ++computerWin;
    document.getElementById("computerWins").setAttribute(
        "style", 'animation: point-added; transition: 1.5s;');

    } else {
    //WRONG KEY
    alert('Please choose a valid choice.');
    }

    //PICS
    if (userGuess=='r') {
        document.getElementById('userPic').setAttribute('src','assets/images/rock-edit.png');
    } else if (userGuess=='s') {
        document.getElementById('userPic').setAttribute('src','assets/images/scissors-edit.png');
    } else if (userGuess=='p') {
        document.getElementById('userPic').setAttribute('src','assets/images/paper-edit.png');
    } else {
        document.getElementById('userPic').setAttribute('src','assets/images/shrug-edit.png');
    }

    //PICS
    if (computerGuess=='r') {
        document.getElementById('compPic').setAttribute('src','assets/images/rock-c.png');
    } else if (computerGuess=='s') {
        document.getElementById('compPic').setAttribute('src','assets/images/scissors-c.png');
    } else if (computerGuess=='p') {
        document.getElementById('compPic').setAttribute('src','assets/images/paper-c.png');
    } else {
        console.log('error');
    }
};
