//import {generateMessage} from '../../../../Codecademy-EightBallMagic/BackEnd/api.js';

const myButton = document.getElementById("myButton");
const messageDisplay = document.getElementById("messageDisplay");
//let generatedMessage = generateMessage();

function createAlert(){
    alert("Button was Clicked!");
}
function retrieveMessage(){
    messageDisplay.textContent = generatedMessage;
}


myButton.addEventListener("click", createAlert);




//console.log(generatedMessage);