







const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      return "Please enter a valid selection";
    }
  };
  
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
  
  //console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return `It is a tie game, the computer selected "${computerChoice}", and the user selected "${userChoice}."`;
    } else if (userChoice === "bomb") {
      return `The user has won the game with their selection of "${userChoice}." Bomb definitely beats the computer\'s choice of "${computerChoice}."`;
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return `The computer has won the game.  The computer\'s choice of "${computerChoice}" has defeated the user\'s choice of "${userChoice}."`;
      } else {
        return `The user has won the game.  The user's choice of "${userChoice}" has defeated the computer's choice of "${computerChoice}."`;
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return `The computer has won the game.  The computer\'s choice of "${computerChoice}" has defeated the user\'s choice of "${userChoice}."`;
      } else {
        return `The user has won the game.  The user's choice of "${userChoice}" has defeated the computer's choice of "${computerChoice}."`;
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return `The computer has won the game.  The computer\'s choice of "${computerChoice}" has defeated the user\'s choice of "${userChoice}."`;
      } else {
        return `The user has won the game.  The user\'s selection of "${userChoice}" has defeated the computer\'s choice of "${computerChoice}."`;
      }
    }
  };
  
  //console.log(determineWinner('paper',getComputerChoice()));
  
  const playGame = () => {
    user = getUserChoice("rock");
    computer = getComputerChoice();
  
    /*console.log(`The user has selected '${user}.' The computer has selected ${computer}.`)*/
    console.log(determineWinner(user, computer));
  };
  
  