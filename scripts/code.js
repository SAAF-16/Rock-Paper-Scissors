function computerPlay(){
    return Math.floor(Math.random()*3);
}
let choice=["rock","paper","scissors"];
let nRounds=prompt("how many rounds do you want to play?")
let userScore=0;
let pcScore=0;
let userPlay;
let x=true;
for(let i=0;i<nRounds;i++){
    x=true;
    while(x){
    userPlay= prompt("Rock, Paper or Scissors ?");
    if((userPlay.toLowerCase()==choice[0])||(userPlay.toLowerCase()==choice[1])||(userPlay.toLowerCase()==choice[2])){
        x=false;
    }else{
        alert("insert a valid input");
    }
    }
    userPlay=(userPlay==choice[0])?userPlay=0
    :(userPlay==choice[1])?userPlay=1
    :userPlay=2;
    let pcPlay=computerPlay();
    alert(`Computer played ${ choice[pcPlay] } !`);
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