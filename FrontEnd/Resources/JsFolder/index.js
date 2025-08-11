import {message} from '../../../../Codecademy-EightBallMagic/BackEnd/api.js';
const myButton = document.getElementById("myButton");
const messageDisplay = document.getElementById("messageDisplay");
let predictiveMessage = message.textContent;

function createAlert(){
    alert("Button was Clicked!");
}
function retrieveMessage(){
    messageDisplay.textContent = predictiveMessage;
}


myButton.addEventListener("click", retrieveMessage);

console.log(message);