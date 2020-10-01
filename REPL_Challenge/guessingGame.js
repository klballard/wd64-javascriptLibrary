//initial variables - setting the parameter of random value + amount of allowed guesses
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guessCount = 3;



// Creating the First Text
let textField1 = document.createElement("H4");
let textContent1 = document.createTextNode("Guess a number, 1-10! You have three chances.")
textField1.appendChild(textContent1);
document.body.appendChild(textField1);

// Creating the text submit
let inputGuess = document.createElement("input");
inputGuess.type = "text", "submit";
inputGuess.id = "guessField";
inputGuess.className = "guessField";
document.body.appendChild(inputGuess);

// Creating the submit button
let submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.innerHTML = "Submit your guess!";
submitBtn.class = "guessSubmit";
submitBtn.id = "submitGuess";
submitBtn.style.height = "40px";
submitBtn.style.width = "100px";
document.body.appendChild(submitBtn);


// Processing the guess
document.getElementById("submitGuess").onclick = function() {
    let userGuess = document.getElementById("guessField").value;
    if(randomNumber == userGuess){
        alert("HOORAY! You guessed the correct number in " + guessCount + " attempt(s)!");
    } else if(userGuess > randomNumber) {
        guessCount++;
        alert("Too high! Try again.");
    } else {
        guessCount++;
        alert("Too low! Try again.");
    }
}

