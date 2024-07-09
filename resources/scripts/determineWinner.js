export const determineWinner = (userChoice, computerChoice) => {
  


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
