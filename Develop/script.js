// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var upperChar = ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
var numberChar = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// This is the function for generating a lower case character.
function generatePassword() {
  var passwordLength = window.prompt ("How many characters would you like your password to have?")
  var lowerQuestion = window.confirm("Would you like to include lower case characters?");
  var upperQuestion = window.confirm("Would you like to include upper case characters?");
  var numberQuestion = window.confirm("Would you like to include numeric characters?");
  var specialQuestion = window.confirm("Would you like to include special characters?");

  var possibleCharacters = []
    if (lowerQuestion) {
      possibleCharacters.concat(lowerChar)
    }
    if (upperQuestion) {
      possibleCharacters.concat(upperChar)
    }
    if (numberQuestion) {
      possibleCharacters.concat(numberChar)
    }
    if (specialQuestion) {
      possibleCharacters.concat(specialChar)
    }

    var randomPassword = []
  for(var i=0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * possibleCharacters.length)
    var randomCharacter = possibleCharacters[randomNumber];
    randomPassword.push(randomCharacter)
  }
  console.log(randomPassword)
  }



// var myPassword = lowerQuestion.concat(upperQuestion, numberQuestion, specialQuestion);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
