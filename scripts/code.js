/* function computerPlay() {
    return Math.floor(Math.random() * 3);
}
let choice = ["rock", "paper", "scissors"];
let x = false;
let nRounds;
let userScore = 0;
let pcScore = 0;
let userPlay;
let pcPlay;

while (!x) {
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
alert(`Final score:  \n Your Score : ${userScore} Pc Score : ${pcScore}`); */
function playAnimation(e){
    const play = document.querySelector(`.playable[id=${e.srcElement.id}]`);
    play.classList.toggle("userPlay1");

}
const playable=document.querySelectorAll(".playable");
playable.forEach(played=>{
    played.addEventListener("click",playAnimation)
})

const keys= document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
});
