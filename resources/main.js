


const throwButton = document.getElementById("throw");
throwButton.hidden=true;
const header = document.getElementById("header");
const userSection = document.getElementById("user");
const computerSection = document.getElementById("computer");
const playerSection = document.getElementById("players");

const dropDown = document.getElementById("user-choice");

const resetButton = document.getElementById("reset");
resetButton.hidden= true;

const userChoiceSelect = document.getElementById("user-choice");
userChoiceSelect.value = "---";

userChoiceSelect.addEventListener("change", ()=> {
  if(userChoiceSelect.value !== "---") {
throwButton.hidden = false;
userChoiceSelect.disabled= true;}
else {
  header.innerHTML = "Make a Selection";
}
});


const resetFunction = () => {
    const userChoiceDisplay = document.getElementById("user-choice-display");
    userChoiceDisplay.innerHTML = "?";
    userChoiceSelect.disabled= false;
    userChoiceSelect.value = "---";
    
    const computerChoiceDisplay = document.getElementById("computer-choice-display");
    computerChoiceDisplay.innerHTML = "?";

    header.innerHTML = "Play";

    userSection.style.backgroundColor="";
    userSection.style.boxShadow="none";
    playerSection.style.boxShadow="none";
    playerSection.style.backgroundColor="";
    computerSection.style.backgroundColor ="";
    computerSection.style.boxShadow="none";

    throwButton.hidden= true;
    resetButton.hidden= true;
    dropDown.hidden = false;
    
}


const throwFunction = () => {
    const userChoice = document.getElementById("user-choice").value;

   
    const userChoiceDisplay = document.getElementById("user-choice-display");
    userChoiceDisplay.innerHTML = userChoice;

    const computerChoiceDisplay = document.getElementById("computer-choice-display");

    const getComputerChoice = () => {
        const num = Math.floor(Math.random() * 3);
        if (num === 0) {
          return "rock";
        } else if (num === 1) {
          return "paper";
        } else {
          return "scissors";
        }
      };
    const computerChoice = getComputerChoice();

    computerChoiceDisplay.innerHTML = computerChoice;

    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            
            return "It's a tie!"
          //alert (`It is a tie game, the computer selected "${computerChoice}", and the user selected "${userChoice}."`);
        } else if (userChoice === "bomb") {

          //alert (`The user has won the game with their selection of "${userChoice}." Bomb definitely beats the computer\'s choice of "${computerChoice}."`);
        } else if (userChoice === "rock") {
          if (computerChoice === "paper") {
            
            return "The computer wins! :("
            //alert (`The computer has won the game.  The computer\'s choice of "${computerChoice}" has defeated the user\'s choice of "${userChoice}."`);
          } else {
            return "You win!"
            //alert (`The user has won the game.  The user's choice of "${userChoice}" has defeated the computer's choice of "${computerChoice}."`);
          }
        } else if (userChoice === "paper") {
          if (computerChoice === "scissors") {
            return "The computer wins! :("
            //alert (`The computer has won the game.  The computer\'s choice of "${computerChoice}" has defeated the user\'s choice of "${userChoice}."`);
          } else {
            return "You win!"
            //alert (`The user has won the game.  The user's choice of "${userChoice}" has defeated the computer's choice of "${computerChoice}."`);
          }
        } else if (userChoice === "scissors") {
          if (computerChoice === "rock") {
            return "The computer wins! :("
            //alert (`The computer has won the game.  The computer\'s choice of "${computerChoice}" has defeated the user\'s choice of "${userChoice}."`);
          } else {
            return "You win!"
            //alert (`The user has won the game.  The user\'s selection of "${userChoice}" has defeated the computer\'s choice of "${computerChoice}."`);
          }
        }


    
      };


      header.innerHTML = determineWinner(userChoice, computerChoice);
      let color = "#FCF6B1";

      if(header.innerHTML === "You win!") {
        userSection.style.backgroundColor=color;
        userSection.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px";
        
        throwButton.hidden= true;
        resetButton.hidden= false;
        dropDown.hidden = true;



      } else if (header.innerHTML === "The computer wins! :(") {
        computerSection.style.backgroundColor =color;
        computerSection.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px";
        
        
        throwButton.hidden= true;
        resetButton.hidden = false;
        dropDown.hidden = true;

        
      } else {
        playerSection.style.backgroundColor=color;
        playerSection.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px";
        throwButton.hidden= true;
        dropDown.hidden = true;
        resetButton.hidden = false;




      }

      //alert()





    

      
    
      
      


   

   















}

throwButton.addEventListener("click", throwFunction);
resetButton.addEventListener("click", resetFunction);