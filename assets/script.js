// Assignment code here
var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numbers  = '1234567890'
var lowerCase = alphabet.split('');
var upperCase = alphabet.toUpperCase().split('')
var specialChar = symbols.split('')
var numChar = numbers.split('')

console.log(numChar)


function generatePassword(){

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
