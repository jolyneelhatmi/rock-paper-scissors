
let arr = ["rock", "paper", "scissors"];

function computerPLay(){
    return arr[Math.floor(Math.random()*arr.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "draw!";
    }else if ((playerSelection === "rock" && computerSelection === "scissors")||(playerSelection=== "paper" && computerSelection === "rock")||(playerSelection==="scissors" && computerSelection === "paper"))
    {
        return `You won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    }else {
        return `you lost! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }

}
const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function game(){
    let p = 0;
    let c = 0;
    
    for(let i=0; i<5; i++){
        let computer = computerPLay();
        let playerSelection = playerInput();
        let x = playRound(playerSelection, computer);
        console.log(x);
        console.log(playerSelection, computer);
        if(x === `You won! ${capitalize(playerSelection)} beats ${capitalize(computer)}`) {
            alert(x);
            p+=1;
        } else if(x === `you lost! ${capitalize(computer)} beats ${capitalize(playerSelection)}`){
            c+=1;
            alert(x);
        } else{
            c+=0.5;
            p+=0.5;
            alert(x);
        }
    }
    console.log(p,c);
    if (p>c){
        return "you're the winner";
    } else if (c>p){
        return "radwan Saghir";
    }else {
        return "draw";
    }
}

console.log(game());

function playerInput(){
    let correctplayer;
     let player = prompt("what's your selection ?");
     if((player.toLowerCase() == "rock")||(player.toLowerCase() == "paper")||(player.toLowerCase() =="scissors"))
     {  
        correctplayer = player.toLowerCase();
     }else {
        alert("wrong input");
        playerInput();
     }
     return correctplayer;
}





