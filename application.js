let userScore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const generateComputerChoice = () => {
    const options=["rock","paper","scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];

};

const drawGame = () =>{
        console.log("Game was Draw!");
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) =>{
    if(userWin){
       userScore++;
       userScorepara.innerText = userScore;
       console.log("You Win!");
       msg.innerText = "You win!"
       msg.style.backgroundColor = "green";
    }
    else{
        console.log("You lose!");
        compscore++;
        compScorepara.innerText = compscore
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User Choice =",userChoice);

    //Computer choice
    const compChoice=generateComputerChoice();
    console.log("Computer Choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
   
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });

});
