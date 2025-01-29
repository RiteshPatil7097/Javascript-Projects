let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const computerScorePara=document.querySelector("#computer-score")


const showWinner = (userwin) =>{
    if(userwin==true){
        console.log("you win")
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        console.log("computer wins")
        msg.innerText="Computer Wins";
        msg.style.backgroundColor="red";
        computerScore++;
        computerScorePara.innerText=computerScore;
    }
}

const drawGame =() =>{
    console.log("game was draw");
    msg.innerText="Game was a Draw";
    msg.style.backgroundColor="orange";
}

const playgame =(userchoice) =>{
     console.log("user choice = ",userchoice)
     //computer choice
     const computerChoice= gencompChoice();
     console.log("Comp choice =",computerChoice)

     if(userchoice == computerChoice){
       drawGame();
     }
     else{
        let userwin =true;
        if(userchoice==="rock"){
            userwin = computerChoice==="scissors"
           }
        else if(userchoice==="paper"){
            userwin = computerChoice==="rock"
        }
        else{
            userwin = computerChoice==="paper";
        }
        showWinner(userwin);
    }
}
const gencompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*options.length); 
    return options[randIdx];
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",function(){
        const choiceID= choice.getAttribute("id")
        console.log("Choice was clicked",choiceID)
        playgame(choiceID);
    })      
})