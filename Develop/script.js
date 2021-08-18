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

function generatePassword() {
  var question = prompt("Would you like to include lower case characters?");
  if (
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
