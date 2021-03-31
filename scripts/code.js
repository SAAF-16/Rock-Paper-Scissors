let choice = ["Rock", "Paper", "Scissors"];
let comments = [["Good play! Rock breaks Scissors", "Damn! you got wrapped by the paper", "Rock on Rock.. it's a draw"],
["Ooh yes! that rock didn't had a chance", "Well.. it literally cut you off..", "Two paper.. we can write that's a draw"],
["Zac Zac! you cut that paper in pieces ", "No chances against that rock", "You can't cut but didn't get cut , it's a draw"]
];
let x = false;
let nRounds;
let userScore = 0;
let pcScore = 0;
let userPlay;
let pcPlay;
let round = 0;

const comment = document.querySelector("#pComment");
const currRound = document.querySelector("#pRound");
const userBoard = document.querySelector("#userPlay");
const pcBoard = document.querySelector("#pcPlay");
const gameContainer = document.getElementById("gameContainer");

const gameStart = document.getElementById('game-start');
gameStart.addEventListener('click', showGameStart());

const gameOver = document.getElementById('game-over');
gameOver.addEventListener('click', showGameOver());

document.querySelector("selectors");

const playable = document.querySelectorAll(".playable");
playable.forEach(userSelectPlay());

const plays = document.querySelectorAll(".playable");
plays.forEach(endOfAnimation());



updateScore();



function showGameOver() {
    return (e) => {
        if (e.target.nodeName !== 'BUTTON')
            return false;
        gameOver.classList.remove('movein');
        gameOver.classList.add('moveout');
        gameStart.classList.remove('moveout');
        gameStart.classList.add('movein');
        comment.textContent = "So we back at it again!";
    };
}

function showGameStart() {
    return (e) => {
        if (e.target.nodeName !== 'BUTTON')
            return false;
        nRounds = e.target.textContent;
        gameStart.classList.remove('movein');
        gameStart.classList.add('moveout');
        gameContainer.style.opacity = 1;
    };
}

function updateScore() {
    const userBoard = document.querySelector("#userScore");
    const pcBoard = document.querySelector("#pcScore");
    const currRound = document.querySelector("#pRound");
    userBoard.textContent = userScore;
    pcBoard.textContent = pcScore;
    currRound.textContent = round;

}
function computerPlay() {
    return randomNumber();
}
function randomNumber() {
    return Math.floor(Math.random() * 3);
}
function userSelectPlay() {
    return uPlayed => {
        if (userScore == nRounds || pcScore == nRounds) return;//so that nothing is clickable
        if (`${uPlayed.id}`[0] == "p")
            return; //if a computer tile is pressed it doesn't go on

        uPlayed.addEventListener("click", (e) => {
            userPlay = `${e.target.id}`.slice(1);
            pcPlay = computerPlay();

        });
        uPlayed.addEventListener("click", gameTime());

    };
}
function gameTime() {
    return (e) => {
        if (userScore == nRounds || pcScore == nRounds) return;//so that nothing is clickable
        playAnimation(e);
        calculateWinner(e);

    };
}
function playAnimation(e) {
    const uPlay = document.querySelector(`.playable[id=${e.target.id}]`);
    uPlay.classList.toggle("playAnim");
    const pPlay = document.querySelector(`.playable[id=p${choice[pcPlay]}]`);
    pPlay.classList.toggle("playAnim");
}
function endOfAnimation() {
    return play => {
        play.addEventListener("animationend", removeAnimation);
    };
}
function removeAnimation() {
    this.classList.remove("playAnim");
    cleanFloor();
}
function calculateWinner() {

    if (userPlay == choice[0]) {
        userPlay = 0;
    } else if (userPlay == choice[1]) {
        userPlay = 1;
    } else {
        userPlay = 2;
    }
    if (((userPlay + 2) % 3) == (pcPlay)) {
        comment.textContent = comments[userPlay][0];
        userBoard.classList.add("winner");
        pcBoard.classList.add("loser");
        userScore++;
        updateScore();
    } else if (((userPlay + 1) % 3) == (pcPlay)) {
        comment.textContent = comments[userPlay][1];
        pcBoard.classList.add("winner");
        userBoard.classList.add("loser");
        pcScore++;
        updateScore();
    } else {
        comment.textContent = comments[userPlay][2];
    }
    round++;
    currRound.textContent = round;
    checkEnd();
}
function checkEnd() {
    if (userScore == nRounds || pcScore == nRounds) {
        if (userScore > pcScore) {
            comment.textContent = "Let's Gooo! We made it!!!";
        } else {
            comment.textContent = ".. you really lost to a random AI";
        }
        userScore = 0;
        pcScore = 0;
        round = 0;
        updateScore();
        gameOver.classList.add('movein');
    }

}
function cleanFloor() {
    const ufloor = document.querySelector("#userPlay");
    const pcfloor = document.querySelector("#pcPlay");
    ufloor.className = "";
    pcfloor.className = "";

}






