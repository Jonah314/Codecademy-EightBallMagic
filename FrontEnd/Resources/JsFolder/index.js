const myButton = document.getElementById("myButton");

function createAlert(){
    alert("Button was Clicked!");
}

myButton.addEventListener("click", createAlert);