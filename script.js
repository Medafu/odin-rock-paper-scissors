function GameParse(number) {
    switch(number) {
        case 1:
            return "ROCK"
        case 2:
            return "PAPER"
        case 3:
            return "SCISSORS"
    }
}

function userInput() {
    text = prompt("Enter a sign")
    text = text.toUpperCase()

    switch (text) {
        case "ROCK":
            return 1
        case "PAPER":
            return 2
        case "SCISSORS":
            return 3
    }
}

function computerPlay() {
    // 1 - Rock, 2 - Paper, 3 - Scissors
    return Math.floor(Math.random() * (4 - 1) + 1)
}

function playRound(player, computer) {
    if ((player == 1 && computer == 3) || player > computer) {
        console.log("You Won! " + GameParse(player) + " beats " + GameParse(computer))
        return 1
    } else if (player == computer) {
        console.log("Draw!")
    } else {
        console.log("You Lose! " + GameParse(computer) + " beats " + GameParse(player))
        return 0
    }
}


function Game() {
    let playerCount = 0
    let compCount = 0
    for (let i = 0; i < 5; i++) {
        playerSelection = userInput()
        computerSelection = computerPlay()
        let result = playRound(playerSelection, computerSelection)
        if (result == 2) {
            continue
        } else if (result) {
            playerCount++
        } else {
            compCount++
        }
    }

    alert("Result: Player: " + playerCount + " Computer: " + compCount)
    console.log("type Game() to start again")
}

Game()