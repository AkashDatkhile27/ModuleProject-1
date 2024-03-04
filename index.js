const buttons = document.querySelectorAll('button');
let playerScore = localStorage.getItem('playerScore') || 0;
let computerScore = localStorage.getItem('computerScore') || 0;
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("ComputerScore").innerHTML = computerScore;
let shadow=document.getElementById("winner_shadow");
let RuleButton=document.getElementById("RuleButton");
let NextButton=document.getElementById("NextButton");
let MainWindow=document.getElementById("section1");
let CelebrationWindow=document.getElementById("Celebration-Window");
let RuleWindow=document.getElementById("block-3");
let PlayAgain=document.getElementById("Play-Again") ;
 let winner="";

buttons.forEach(button => {
    button.addEventListener('click', playGame);
   });
 
  function getComputerMove() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }


  function playGame(event) {
    const player =event.target.value;
    const computer = getComputerMove();
    if(player=="hidewindow"){
      document.getElementById("block-3").style.visibility = "hidden";
    }
    else if(player=="ShowRuleWindow"){
      document.getElementById("block-3").style.visibility = "visible";
    }
    else if(player=="hurray"){
      

        MainWindow.style.display="none";
        NextButton.style.visibility="hidden";
        RuleButton.style.visibility="visible";
        RuleButton.style.left="1381px";
        RuleWindow.style.top="20rem";
        PlayAgain.style.visibility="visible";
        PlayAgain.style.left="-1rem";
        PlayAgain.style.top="30rem";
        CelebrationWindow.style.visibility="visible";
        document.getElementById("Game-Window").style.display = "none";
        
    }
    else if(player=="Replay" || player=="Play-Again"){
      window.location.reload(true);
    }
    else {
     Gamepad(player,computer);
    }
    
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
  }


 function Gamepad(player,computer){
        document.getElementById("block-3").style.visibility = "hidden";
        document.getElementById("game").style.visibility = "hidden";
        document.getElementById("Player-Choice").style.visibility = "visible";
        document.getElementById("Computer-Choice").style.visibility = "visible";
        if(player=='Rock'){
            document.getElementById("rock").style.visibility = "visible";
            if(computer=='Scissors'){
                document.getElementById("Computer-Scissor").style.visibility = "visible";
                document.getElementById("Win").style.visibility = "visible";
                PlayAgain.style.visibility = "visible";
                shadow.style.visibility="visible";
                shadow.style.left= "26.1rem";
                shadow.style.top= "21.8rem";
                RuleButton.style.left="1200px";
                NextButton.style.visibility="visible";
                winner="player";
                

              }
            else if(computer=='Paper'){
                document.getElementById("Computer-Paper").style.visibility = "visible";
                document.getElementById("loss").style.visibility = "visible";
                PlayAgain.style.visibility = "visible";
                shadow.style.visibility="visible";
                shadow.style.left= "58.4rem";
                shadow.style.top= "21.4rem";
               
                winner="computer";
              }
            else{
                document.getElementById("Computer-Rock").style.visibility = "visible";
                document.getElementById("Tie").style.visibility = "visible";
                document.getElementById("Replay").style.visibility = "visible";
              }
        }

        if(player=='Scissors'){
              document.getElementById("scissor").style.visibility = "visible";
              if(computer=='Rock'){
                  document.getElementById("Computer-Rock").style.visibility = "visible";
                  document.getElementById("loss").style.visibility = "visible";
                  PlayAgain.style.visibility = "visible";
                  shadow.style.visibility="visible";
                  shadow.style.left= "58.4rem";
                shadow.style.top= "21.4rem";
               
                  winner="computer";
                }
              else if(computer=='Paper'){
                  document.getElementById("Computer-Paper").style.visibility = "visible";
                  document.getElementById("Win").style.visibility = "visible";
                  PlayAgain.style.visibility = "visible";
                  shadow.style.visibility="visible";
                  shadow.style.left= "26.1rem";
                  shadow.style.top= "21.8rem";
                  RuleButton.style.left="1200px";
                  NextButton.style.visibility="visible";
                  winner="player";
                }
              else{
                  document.getElementById("Computer-Scissor").style.visibility = "visible";
                  document.getElementById("Tie").style.visibility = "visible";
                  document.getElementById("Replay").style.visibility = "visible";
                }
            }

          if(player=='Paper'){
                document.getElementById("paper").style.visibility = "visible";
                if(computer=='Rock'){
                    document.getElementById("Computer-Rock").style.visibility = "visible";                   
                    document.getElementById("Win").style.visibility = "visible";
                    PlayAgain.style.visibility = "visible";
                    shadow.style.visibility="visible";
                    shadow.style.left= "26.1rem";
                    shadow.style.top= "21.8rem";
                    RuleButton.style.left="1200px";
                    NextButton.style.visibility="visible";
                    winner="player";
                  }
                else if(computer=='Scissors'){
                    document.getElementById("Computer-Scissor").style.visibility = "visible";
                    document.getElementById("loss").style.visibility = "visible";
                    PlayAgain.style.visibility = "visible";
                    shadow.style.visibility="visible";
                    shadow.style.left= "58.4rem";
                    shadow.style.top= "21.4rem";
               
                    winner="computer";
                  }
                else{
                    document.getElementById("Computer-Paper").style.visibility = "visible";
                    document.getElementById("Tie").style.visibility = "visible";
                    document.getElementById("Replay").style.visibility = "visible";
                  }
              }
              
       
        
       
           
         

    updateScore(winner);
  }

 function updateScore(winner) {
  if (winner === 'player') {
    playerScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("ComputerScore").innerHTML = computerScore;
}



 