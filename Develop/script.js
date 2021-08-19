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
  var lowerQuestion = window.confirm("Would you like to include lower case characters?");
    if (lowerQuestion) {
      confirm(Math.floor(Math.random() * lowerChar.length));
    }
    else (!lowerQuestion)
      // Do nothing
    };

// This is the function for generating an upper case character.
function generatePassword() {
  var upperQuestion = window.confirm("Would you like to include upper case characters?");
    if (upperQuestion) {
      confirm(Math.floor(Math.random() * upperChar.length));
    }
    else (!upperQuestion);
      // Do nothing
};

// This is the function for generating a numeric character.
function generatePassword() {
  var numberQuestion = window.confirm("Would you like to include numeric characters?");
    if (numberQuestion) {
      confirm(Math.floor(Math.random() * numberChar.length));
    }
    else (!numberQuestion);
      // Do nothing
};

// This is the function for generating an upper case character.
function generatePassword() {
  var specialQuestion = window.confirm("Would you like to include special characters?");
    if (specialQuestion) {
      confirm(Math.floor(Math.random() * specialChar.length));
    }
    else (!specialQuestion);
      // Do nothing
};

var myPassword = lowerQuestion.concat(upperQuestion, numberQuestion, specialQuestion);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
