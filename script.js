let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate the new secret target number, between 0 and 9
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// Determine which guess is closest to to the target number
function compareGuesses(user, comp, secret) {
    if (user <0 || user > 9) {
        alert("Your number is out of range! Please enter a number between 0 and 9")
    }
    else {
        user_diff = getAbsoluteDistance(user, secret);
        comp_diff = getAbsoluteDistance(comp, secret); 
        return user_diff <= comp_diff;
     }
 }


// Takes two numbers and returns the distance
function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1 - num2);
}

// Increase the winner's score after each round
function updateScore(str) {
    if (str === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

// Update the round number after each round

function advanceRound() {
    currentRoundNumber += 1;
}