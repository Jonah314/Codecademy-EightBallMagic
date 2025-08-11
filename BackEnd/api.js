// Create an Array of Future Predictions for the 8 Ball 
const predictionsArray = ["It is Certain", "Yes, Definitely", "You may rely on it.", "Most likely", "Outlook good", 
    "Don't count on it", "My reply is No", "Outlook no so good", "Ask Again Later", "Reply hazy, try again"];

    



// Create a function the produces a random message from the array
// The function should return a String

function generateMessage(){
    const index = Math.floor(Math.random()*10);
    message = predictionsArray[index];
    return message;

}

console.log(generateMessage());
console.log(generateMessage());