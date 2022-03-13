
let arr = ["rock", "paper", "scissors"];

function computerPLay(){
    return arr[Math.floor(Math.random()*arr.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "draw!";
    }else if ((playerSelection === "rock" && computerSelection === "scissors")||(playerSelection=== "paper" && computerSelection === "rock")||(playerSelection==="scissors" && computerSelection === "paper"))
    {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }else {
        return `you lost! ${computerSelection} beats ${playerSelection}`;
    }
}
let container = document.querySelector("#container");
container.addEventListener("click", choose, false);
let p = 0;
let c = 0;

const results = document.querySelector("#results");
function choose(e){
    if(e.target !== e.currentTarget){
        let choice = e.target.id;
        
        let computerSelection = computerPLay();
        alert(playRound(choice, computerSelection));
        
        if (playRound(choice, computerSelection) === `you lost! ${computerSelection} beats ${choice}`){
            c += 1;
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = "you :" + " " + p +" "+ "the pc :" + " " + c;
            results.appendChild(result);
            console.log(p,c);
        } else if(playRound(choice, computerSelection) === `You won! ${choice} beats ${computerSelection}`){
            p += 1;
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = "you :" + " " + p + " " +"the pc :" + " " + c;
            results.appendChild(result);
            console.log(p,c);
        }

        if (c === 5){
            alert("radwan saghir");
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = "New set of rounds";
            results.appendChild(result);
            p = c = 0;
        }
        if (p === 5){
            alert("You are the winner");
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = "New set of rounds";
            results.appendChild(result);
            p = c = 0;
        }
    }
    e.stopPropagation();
}

/* const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
} */




 /* function game(){
    let p = 0;
    let c = 0;
    
    for(let i=0; i<5; i++){
        
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
} */


/* const rock = document.querySelector('#rock');
rock.addEventListener('click', () => alert(playRound("rock",computerSelection)));

const paper = document.querySelector('#paper');
rock.addEventListener('click', () => alert(playRound("paper",computerSelection)));


const scissors = document.querySelector('#scissors');
rock.addEventListener('click', () => alert(playRound("rock",computerSelection)));
*/
/* const results = document.querySelector('#results');
let x = playRound(playerSelection, computerSelection);
const result = document.createElement('div');
result.classList.add('result');
result.textContent = x;

results.appendChild(result); */








