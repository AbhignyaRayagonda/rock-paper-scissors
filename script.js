        let score = JSON.parse(localStorage.getItem('score')) || 
        { wins: 0, losses: 0, ties: 0 
        };
        updateScoreElement();

        function playGame(playerMove) {
    // Get the computer's move
    const computerMove = pickComputerMove();

    // Determine the result based on the moves
    let result = '';
    if (playerMove === "scissors") {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else {
            result = 'Tie';
        }
    } else if (playerMove === "paper") {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else {
            result = 'You lose';
        }
    } else if (playerMove === "rock") {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        }
    }

    // Update the score based on the result
    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js-result').
    innerHTML = result
    document.querySelector('.js-moves').innerHTML = 
        `You 
        <img src="images/${playerMove}-emoji.png" class = >
        <img src="images/${computerMove}-emoji.png" alt="">
        Computer`
    // Display the result
    document.querySelector('.js-score').innerHTML =
    (`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`);
}
function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}

        function pickComputerMove() {
            // Generate a random number between 0 and 1
            const randomNumber = Math.random();

            // Determine the computer's move based on the random number
            let computerMove = '';
            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'scissors';
            }

            return computerMove;
        }