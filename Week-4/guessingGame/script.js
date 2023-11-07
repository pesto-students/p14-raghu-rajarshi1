function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessesTaken = 0;
    let userGuess = 0;
    let promptMessage = "Enter a number between 1 and 100.";

    while (guessesTaken < totalGuesses) {
        userGuess = prompt(promptMessage);

        if (userGuess === null) {
            return 0;
        }

        // Check if the user entered a valid number
        if (isNaN(userGuess) || userGuess === '') {
            promptMessage = "Please enter a number.";
            continue; // Repeat the loop without using a guess
        }

        userGuess = Number(userGuess); // Convert the input to a number
        guessesTaken++;

        // Check if the guess is correct
        if (userGuess === numToGuess) {
            return guessesTaken;
        }

        // Provide hints without using an extra guess
        if (userGuess < numToGuess) {
            promptMessage = `${userGuess} is too small. Guess a larger number.`;
        } else if (userGuess > numToGuess) {
            promptMessage = `${userGuess} is too large. Guess a smaller number.`;
        }
    }

    // If the loop exits without returning, the user has used all their guesses
    return 0;
}

