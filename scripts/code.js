 function computerPlay() {
    return Math.floor(Math.random() * 3);
}
let choice = ["Rock", "Paper", "Scissors"];
let x = false;
let nRounds;
let userScore = 0;
let pcScore = 0;
let userPlay;
let pcPlay;

/* while (!x) {
    nRounds = +(prompt("You want to play to the best of ? (max 5)"));
    if (nRounds <= 5) {
        x = true;
    } else {
        alert("insert a valid input");
    }
}

for (let i = 0; userScore < nRounds && pcScore < nRounds; i++) {
     x = true;
    while (x) {
        userPlay = prompt("Rock, Paper or Scissors ?");
        if ((userPlay.toLowerCase() == choice[0]) || (userPlay.toLowerCase() == choice[1]) || (userPlay.toLowerCase() == choice[2])) {
            x = false;
        } else {
            alert("insert a valid input");
        }
    } 
    userplay=

    if (userPlay == choice[0]) {
        userPlay = 0;
    } else if (userPlay == choice[1]) {
        userPlay = 1;
    } else {
        userPlay = 2;
    }

    pcPlay = computerPlay();
    alert(`Computer played ${choice[pcPlay]} !`);
    if (((userPlay + 2) % 3) == (pcPlay)) {
        alert("you won!")
        userScore++;
    } else if (((userPlay + 1) % 3) == (pcPlay)) {
        alert("you lost..")
        pcScore++;
    } else {
        alert("it's a draw!")
    }
    alert(`This was Round ${i + 1} \n Your Score : ${userScore} Pc Score : ${pcScore}`);
}
alert(`Final score:  \n Your Score : ${userScore} Pc Score : ${pcScore}`);  */


////////////////////////////////////////////////////////////////////////////////////////////

const playable=document.querySelectorAll(".playable");
playable.forEach(userSelectPlay());






const plays= document.querySelectorAll(".playable");
plays.forEach(play => {
    play.addEventListener("animationend",removeAnimation)
});


function userSelectPlay() {
    return uPlayed => {
        if (`${uPlayed.id}`[0] == "p")
            return; //if a computer tile is pressed it doesn't go on

        uPlayed.addEventListener("click", (e) => {
            userPlay = `${e.target.id}`.slice(1);
            console.log(userPlay);
            pcPlay = computerPlay();
            
        });
        uPlayed.addEventListener("click", playAnimation);
        uPlayed.addEventListener("click", calculateWinner);
        
    };
}
function calculateWinner(){
    if (userPlay == choice[0]) {
        userPlay = 0;
    } else if (userPlay == choice[1]) {
        userPlay = 1;
    } else {
        userPlay = 2;
    }
    if (((userPlay + 2) % 3) == (pcPlay)) {
        console.log("you won!")
        userScore++;
    } else if (((userPlay + 1) % 3) == (pcPlay)) {
        console.log("you lost..")
        pcScore++;
    } else {
        console.log("it's a draw!")
    }
}
function playAnimation(e){
    const uPlay = document.querySelector(`.playable[id=${e.target.id}]`);
    uPlay.classList.toggle("playAnim");
    const pPlay = document.querySelector(`.playable[id=p${choice[pcPlay]}]`);
     pPlay.classList.toggle("playAnim"); 
}
function removeAnimation(){
    this.classList.remove("playAnim");
    }
