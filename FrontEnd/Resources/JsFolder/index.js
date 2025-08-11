const myButton = document.getElementById("myButton");
const messageDisplay = document.getElementById("messageDisplay");

function createAlert(){
    alert("Button was Clicked!");
}
function retrieveMessage(){
    messageDisplay.textContent = "You clicked the button !!!";
}


myButton.addEventListener("click", retrieveMessage);