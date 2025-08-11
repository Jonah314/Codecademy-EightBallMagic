
// Create an Array of Future Predictions for the 8 Ball 
const predictionsArray = ["It is Certain", "Yes, Definitely", "You may rely on it.", "Most likely", "Outlook good", 
    "Don't count on it", "My reply is No", "Outlook no so good", "Ask Again Later", "Reply hazy, try again"];


//Using this code to test whether or not the api.js is connecting to index.js
export const message = "Example Message";



// Create a function the produces a random message from the array
// The function should return a String

export function generateMessage(){
    let index = Math.floor(Math.random()*10);
    let pmessage = predictionsArray[index];
    
    return pmessage;
}



