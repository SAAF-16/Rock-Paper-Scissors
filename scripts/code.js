function computerPlay(){
    return Math.floor(Math.random()*3);
}
function convert(play){
    switch (true){
        case (play.toLowerCase()=="rock"):play=0;break;
        case (play.toLowerCase()=="paper"):play=1;break;
        case (play.toLowerCase()=="scissors"):play=2;break;
    }
    return play;
}
function stringPlay(n){
    switch (true){
        case n==0:return "rock"
        case n==1:return "paper"
        case n==2:return "scissors"
}
}
let nRounds=prompt("how many rounds do you want to play?")
let userScore=0;
let pcScore=0;
let userPlay;
let x=true;
for(let i=0;i<nRounds;i++){
    x=true;
    while(x){
    userPlay= prompt("Rock, Paper or Scissors ?");
    if((userPlay.toLowerCase()=="rock")||(userPlay.toLowerCase()=="paper")||(userPlay.toLowerCase()=="scissors")){
        x=false;
        break;
    }
    alert("insert a valid input");
    }
    userPlay=convert(userPlay);
    let pcPlay=computerPlay();
    alert(`Computer played ${ (stringPlay(pcPlay)) } !`);
    if(((userPlay+2)%3)==(pcPlay)){
        alert("you won!")
        userScore++;
    }else if(((userPlay+1)%3)==(pcPlay)){
        alert("you lost..")
        pcScore++;
    }else{
        alert("it's a draw!")
    }
    alert(`This was Round ${i+1} \n Your Score : ${userScore} Pc Score : ${pcScore}`) ;
}
alert(`Final score:  \n Your Score : ${userScore} Pc Score : ${pcScore}`);