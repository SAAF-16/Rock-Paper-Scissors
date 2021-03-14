let choice = ["Rock", "Paper", "Scissors"];
let comments = [["Good play! Rock breaks Scissors", "Damn! you got wrapped by the paper", "Rock on Rock.. it's a draw"],
["Ooh yes! that rock didn't had a chance", "Well.. it literally cut you off..", "Two paper.. we can write that's a draw"],
["Zac Zac! you cut that paper in pieces ", "No chances against that rock", "You can't cut but didn't get cut , it's a draw"]
]
let x = false;
let nRounds;
let userScore = 0;
let pcScore = 0;
let userPlay;
let pcPlay;
let round=0;

document.querySelector("body").classList.add("visible");
setTimeout(function () { begin(); }, 500);

const playable = document.querySelectorAll(".playable");
playable.forEach(userSelectPlay());

const plays = document.querySelectorAll(".playable");
plays.forEach(endOfAnimation());



function begin() {  //starts the game 
    x = false;
    while (!x) {
        nRounds = +(prompt("You want to play to the best of ? (max 10)"));
        if (nRounds <= 10) {
            x = true;
        } else {
            alert("insert a valid input");
        }
    }
    updateScore()
}
function updateScore() {
    const userBoard = document.querySelector("#userScore");
    const pcBoard = document.querySelector("#pcScore");
    const currRound = document.querySelector("#pRound")
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
    const comment = document.querySelector("#pComment")
    const currRound = document.querySelector("#pRound")
    const userBoard = document.querySelector("#userPlay");
    const pcBoard = document.querySelector("#pcPlay");
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
        updateScore()
    } else if (((userPlay + 1) % 3) == (pcPlay)) {
        comment.textContent = comments[userPlay][1];
        pcBoard.classList.add("winner");
        userBoard.classList.add("loser");
        pcScore++;
        updateScore()
    } else {
        comment.textContent = comments[userPlay][2];
    }
    round++;
    currRound.textContent = round;
    checkEnd(comment);
}
function checkEnd(comment) {
    if (userScore == nRounds || pcScore == nRounds) {
        let restart;
        if (userScore > pcScore) {
            comment.textContent = "Let's Gooo! We made it!!!"
        } else {
            comment.textContent = ".. you really lost to a random AI"
        }
        setTimeout(function () {
            restart = prompt("Do you want to play again? (yes or no)");
            if (restart.toLowerCase() == "yes") {
                userScore = 0;
                pcScore = 0;
                round = 0;
                updateScore();
                comment.textContent = "So we back at it again!"
                begin();

            }
        }, 1500);


    }

}
function cleanFloor() {
    const ufloor = document.querySelector("#userPlay");
    const pcfloor = document.querySelector("#pcPlay");
    ufloor.className = "";
    pcfloor.className = "";

}






