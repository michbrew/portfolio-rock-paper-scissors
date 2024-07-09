import { determineWinner } from "./determineWinner.js";
import { getComputerChoice } from "./getComputerChoice.js";
import {winningColors } from "./winningColors.js";


//Controls

const throwButton = document.getElementById("throw");
const resetButton = document.getElementById("reset");
const dropdown = document.getElementById("user-dropdown");

//Displays
let gameHeader = document.getElementById("game-header");
let computerDisplay = document.getElementById("computer-display");
let userDisplay = document.getElementById("user-display");
const playersSection = document.getElementById("players-section");



dropdown.addEventListener("change", () => {
    throwButton.hidden= false;

});


throwButton.addEventListener("click", ()=> { 
    throwButton.hidden = true;
    resetButton.hidden = false;
    const userChoice = document.getElementById("user-dropdown").value;
    dropdown.disabled = true;
    const computerChoice = getComputerChoice();
   
    userDisplay.innerHTML = userChoice;
    computerDisplay.innerHTML = computerChoice;
    gameHeader.innerHTML = determineWinner(userChoice, computerChoice);

    winningColors();
       
});

resetButton.addEventListener("click", ()=> {
    gameHeader.innerHTML = "Play";
    userDisplay.innerHTML = "?";
    computerDisplay.innerHTML = "?";
    dropdown.value = "---";
    dropdown.disabled = false;
    resetButton.hidden = true; 
    document.getElementById("user-section").style.backgroundColor ="#FCFFF7";
    document.getElementById("computer-section").style.backgroundColor ="#FCFFF7";


})
