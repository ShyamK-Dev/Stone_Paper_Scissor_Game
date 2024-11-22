let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = ()=>{
    msg.innerText = "Game was Draw Play Again!";
    msg.style.backgroundColor = "#0B345B";
    msg.style.color = "white";
};

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Win ! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "#68EDC6";
    msg.style.color = "black";
    
}
else{

    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "#FF4E47";
    msg.style.color = "white";

    }
};

const playGame = (userChoice)=>{

    // generate computer choice
    const compChoice = genCompChoice();
    
    // draw game
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            // scissors, paper
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors"? false:true;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});