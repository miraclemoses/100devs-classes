// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const str = 'Is this going to work?'
// alert(str.endsWith("?"))
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
const multipleWords = 'i am a jr. dev'
console.log(multipleWords.replace('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperOrScissors() {
    let randomly = Math.random()
    if (randomly < 0.33) {
        return 'rock'
    }else if (randomly < 0.66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
console.log(rockPaperOrScissors())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(myChoice) {
    let botChoice = rockPaperOrScissors()
    if ((myChoice === 'rock' && botChoice === 'paper') ||
     (myChoice === 'scissors' && botChoice === 'rock') ||
     (myChoice === 'paper' && botChoice === 'scissors')) {
         return 'You win!!!'
     } else if (myChoice === botChoice) {
         return 'You tied'
     } else {
         return 'You lose!!!'
     }
}
console.log(checkWin('paper'))
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playXTimes(arr){
    arr.forEach(item => console.log(checkWin(item)))
}
playXTimes(['rock','paper','scissors'])