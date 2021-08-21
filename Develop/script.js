// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for random characters
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', ';', ':', '?', '/', '<', '>', '"', '~', '`'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompts for user to generate password
function generatePassword() {
  var passwordLength = window.prompt ("How many characters would you like your password to have?");

// Alerts user if they enter in an item that is not a number
while(isNaN(+passwordLength) ) {
  alert("Please pick a number between 8 and 128 characters.")
// This allows the user to change their answer
  passwordLength = prompt("How many characters would you like your password to have?")
}

// Prevents user from choosing a number below 8
while (passwordLength < 8) {
  alert("Password length must be at least 8 characters.");
// This allows the user to change their answer
  passwordLength = prompt("How many characters would you like your password to have?");
}

// Prevents user from choosing a number greater than 128
while (passwordLength > 128) {
  alert("Password length must be less than 128 characters.");
// This allows the user to change their answer
  passwordLength = prompt("How many characters would you like your password to have?")
}

  var lowerQuestion = window.confirm("Would you like to include lower case characters?");
  var upperQuestion = window.confirm("Would you like to include upper case characters?");
  var numberQuestion = window.confirm("Would you like to include numeric characters?");
  var specialQuestion = window.confirm("Would you like to include special characters?");

// This compiles the user's criteria for characters based on prompt responses
  var possibleCharacters = []
    if (lowerQuestion) {
      possibleCharacters = possibleCharacters.concat(lowerChar)
    }
    if (upperQuestion) {
      possibleCharacters = possibleCharacters.concat(upperChar)
    }
    if (numberQuestion) {
      possibleCharacters = possibleCharacters.concat(numberChar)
    }
    if (specialQuestion) {
      possibleCharacters = possibleCharacters.concat(specialChar)
    }

// This prompts the user if they did not choose any characters
    if (possibleCharacters.length == 0) {
      alert("You neglected to choose a character, please try again.");
    } 

// This assembles the random generation of criteria from above responses
    var randomPassword = []
  for(var i=0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * possibleCharacters.length)
    var randomCharacter = possibleCharacters[randomNumber];
    randomPassword.push(randomCharacter);
  }

return randomPassword.join("");
}
