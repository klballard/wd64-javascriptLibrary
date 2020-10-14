//initial variables - setting the parameter of random value + amount of allowed guesses
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guessCount = 3;


while (guessCount > 0) {
    guess = prompt("Guess a number, 1-10! You have 3 chances.");
    if(guess == null) {
        alert("Exiting the game now.");
        break;
    } else if(guess < randomNumber) {
        alert("Too low! Better luck next time.");
    } else if(guess > randomNumber) {
        alert("Too high! Try again.");
    } else {
        alert("Congrats! You got it.");
        break;
    }
    guessCount = guessCount - 1;
}

if(guessCount == 0) {
    alert("You're out of lives! GAME OVER");
}