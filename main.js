var scoreComputer = 0;
var scorePlayer = 0;
var roundNb = 5;

// default invitation to play when nothing happened
const resultDisplay = document.getElementById('display');
resultDisplay.textContent = 'Greetings, human! Would you like to play? Just click!';

const player = document.getElementById('player');
player.textContent = scorePlayer;

const computer = document.getElementById('computer');
computer.textContent = scoreComputer;



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function computerPlay() {
	let rock = 'Rock';
	let paper = 'Paper';
	let scissors = 'Scissors';
	let rps = [rock, paper, scissors];
	let rng = getRndInteger(0,2);
	return(rps[rng]);
}

function checkWin() {
	if (scoreComputer == roundNb || scorePlayer == roundNb) {
		if (scoreComputer == roundNb) {
			resultDisplay.textContent = 'You lose! Haha, machine beats human yet again!';
		}
		else {
			resultDisplay.textContent = 'You win... For now. I will be avenged!'
		}
		return true;
	}
	else {return false;}
}

function playRound (playerSelection, computerSelection) {
	playerSelection = playerSelection.toUpperCase();
	computerSelection = computerSelection.toUpperCase();
	if (playerSelection === computerSelection) {
		resultDisplay.textContent = 'Tie!';
		return;
	}
	else if (playerSelection === 'ROCK') {
		if (computerSelection === 'PAPER') {
			resultDisplay.textContent ='You lose! Paper beats Rock.';
			scoreComputer+=1;
			computer.textContent=scoreComputer;
			return;
		}
		else {
			resultDisplay.textContent='You win! Rock beats Scissors.';
			scorePlayer+=1;
			player.textContent=scorePlayer;
			return;	
		}
	}
	else if (playerSelection === 'PAPER') {
		if (computerSelection === 'SCISSORS') {
			resultDisplay.textContent ='You lose! Scissors beats Paper.';
			scoreComputer+=1;
			computer.textContent=scoreComputer;
			return;
		}
		else {
			resultDisplay.textContent='You win! Paper beats Rock.';
			scorePlayer+=1;
			player.textContent=scorePlayer;
			return;
		}
	}
	else {
		if (computerSelection === 'ROCK') {
			resultDisplay.textContent ='You lose! Rock beats Scissors.';
			scoreComputer+=1;
			computer.textContent=scoreComputer;
			return;
		}
		else {
			resultDisplay.textContent='You win! Scissors beats Paper.';
			scorePlayer+=1;
			player.textContent=scorePlayer;
			return;
		}
	}
}

function play(){
	let computerSelection = computerPlay();
	if (checkWin()) {
		button.removeEventListener('click',play);
	}
	else {
		playRound(playerSelection, computerSelection);
	checkWin();
	}
}


// plays the game when the player clicks on rock paper scissors buttons
const btns = document.querySelectorAll('button.btn');
btns.forEach((button) => {
	button.addEventListener('click', () => {
    playerSelection = button.id;
  	});
	button.addEventListener('click', play);	
});
                            

// a button to reset all scores
const reset = document.querySelector('button.reset');
reset.addEventListener('click', (e) => {
		scoreComputer = 0;
		scorePlayer = 0;
		computer.textContent = scoreComputer;
		player.textContent = scorePlayer;
		resultDisplay.textContent = 'Alright, another one!';
	});