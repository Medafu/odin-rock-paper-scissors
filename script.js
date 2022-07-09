let text = document.querySelector('.text')
let counter_div = document.querySelector('.counter')
let pc = 0 //player counter
let cc = 0 //comp counter
let buttons = document.querySelectorAll('button')

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

function computerPlay() {
    // 1 - Rock, 2 - Paper, 3 - Scissors
    return Math.floor(Math.random() * (4 - 1) + 1)
}

function handleEvent(e) {
    let playerSelection = parseInt(e.srcElement.id)
    let compSelection = computerPlay()
    playRound(playerSelection, compSelection)
}

function playRound(player, computer) {

    
    if ((player == 1 && computer == 3) || player > computer) {
        text.textContent = "You Won! " + GameParse(player) + " beats " + GameParse(computer)
        pc += 1
    } else if (player == computer) {
        text.textContent = "Draw!"
    } else {
        text.textContent = "You Lose! " + GameParse(computer) + " beats " + GameParse(player)
        cc += 1
    }

    if (pc == 5 || cc == 5) {
        buttons.forEach((button) => {
            button.removeEventListener('click', handleEvent)
        })

        if (pc == 5) {
            return counter_div.textContent = "GAME OVER! PLAYER WON!"
        } else if (cc == 5) {
            return counter_div.textContent = "GAME OVER! COMPUTER WON!"
        }
    }
        
    counter_div.textContent = `Player ${pc} : Computer ${cc}`
}

buttons.forEach((button) => {
    button.addEventListener('click', handleEvent)
})