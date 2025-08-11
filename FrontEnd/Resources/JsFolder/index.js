
//Orginaly was going to connect back end to front end, but this assignment Requires Less
//import {generateMessage} from '../../../../Codecademy-EightBallMagic/BackEnd/api.js';


// functionality section
/* -----------------------api.js Section ---------------- */

// Create an Array of Future Predictions for the 8 Ball 
const predictionsArray = ["It is Certain", "Yes, Definitely", "You may rely on it.", "Most likely", "Outlook good", 
    "Don't count on it", "My reply is No", "Outlook no so good", "Ask Again Later", "Reply hazy, try again"];


//Using this code to test whether or not the api.js is connecting to index.js
const message = "Example Message";



// Create a function the produces a random message from the array
// The function should return a String

function generateMessage(){
    let index = Math.floor(Math.random()*10);
    let pmessage = predictionsArray[index];
    
    return pmessage;
}
/*-----------------------------------------------------------*/



// Used to Connect the buttion to .js
const myButton = document.getElementById("myButton");
// Used to put the message on the HTML Page
const messageDisplay = document.getElementById("messageDisplay");

// function connecting to "backend functionality"
function retrieveMessage(){
    
    messageDisplay.textContent = generateMessage();
}
// function for clearing messageDisplay
function clearMessage(){
    messageDisplay.textContent = '';
}
function hideDiv(){
    const divToHide = document.getElementById('hider');
    divToHide.classList.remove('peek');
    divToHide.classList.add('hide');
}
function fadeIn(){
    const divToHide = document.getElementById('hider');
    divToHide.classList.remove('hide');
    divToHide.classList.add('peek');
}


//------- Adding Shaking Function ------- ///
function shake(){
    const shakingDiv = document.getElementById('shakingDiv');
    shakingDiv.classList.add('shake-animation');
    
    // This section allows you to set the time for shake animation and resets it so you can do it again 
    setTimeout(()=>{
        shakingDiv.classList.remove('shake-animation');
    },300);
}





// creating a function to combine all the functions with a timeout to space them out time wise
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function realism(){
    
    //First we shake the ball, abd hide the blue triangle
    shake();
    hideDiv();
    await delay (50);
    // we clear the message as the triangle fades in to the back of the ball
    clearMessage();
    // we give the ball some time before it predicts the next message
    await delay (620);
    // we retrieve the new message and have it fade back in
    retrieveMessage();
    fadeIn();
    
    
}

//when button is clicked it activates the function realism
myButton.addEventListener("click", realism);




