// Assign Variables
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = '1234567890';
var lowerCase = alphabet.split('');
var upperCase = alphabet.toUpperCase().split('');
var specialChar = symbols.split('');
var numChar = numbers.split('');
var passwordOptions = [];
var passwordFirstDraft = [];
var passwordLength;
var passwordSecondDraft ;
var allChars = [];

//Get random number
function generateRandomNum(len) {

  return Math.floor(Math.random() * len)

}


//Prompts user to choose what kind of characters they want in their password

function includeLowerCase() {

  var choice = window.confirm("Do you want to include lowercase characters? (Press OK for yes, Cancel for no)");

  if (choice) {
    passwordOptions.push(lowerCase[generateRandomNum(lowerCase.length)]);
    allChars.push(lowerCase)
  }

}

function includeUpperCase() {
  var choice = window.confirm("Do you want to include uppercase characters? (Press OK for yes, Cancel for no)");

  if (choice) {

    passwordOptions.push(upperCase[generateRandomNum(upperCase.length)]);
    allChars.push(upperCase)
  }

}

function includeSpecialChar() {
  var choice = window.confirm("Do you want to include special characters? (Press OK for yes, Cancel for no)");

  if (choice) {

    passwordOptions.push(specialChar[generateRandomNum(specialChar.length)]);
    allChars.push(specialChar)
  }

}

function includeNumChar() {
  var choice = window.confirm("Do you want to include numerical characters? (Press OK for yes, Cancel for no)");

  if (choice) {

    passwordOptions.push(numChar[generateRandomNum(numChar.length)]);
    allChars.push(numChar)
  }

}

//Prompts user to choose length of password
function getPasswordLength() {

  var lengthChoice = window.prompt("Choose how long the password should be by entering a number between 8 and 128 (example: 8, not eight)")

  if (8 <= lengthChoice && lengthChoice <= 128) {
    return Math.floor(lengthChoice)
  } else {
    window.confirm("Please choose a number between 8 and 128.")
    return getPasswordLength()
  }

}

// Creates password from arrays pushed into allChars
function createDraft() {
  passwordFirstDraft = [];
  
  for (let i = 0; i < passwordLength; i++) {
  var randomArray = generateRandomNum(allChars.length)
  var randomChar = generateRandomNum(allChars[randomArray].length)
  var randomText = allChars[randomArray][randomChar]
  passwordFirstDraft.push(randomText)

}
// guarantees that at least one character will be present in final password
for (var i = 0; i < passwordOptions.length; i++){
  passwordFirstDraft.splice(i,1,passwordOptions[i])
}
}


//Generate a password from the options that the user selected
function generatePassword() {

  passwordOptions = [];
  allChars = [];
includeLowerCase()
includeUpperCase()
includeSpecialChar()
includeNumChar()
passwordLength = getPasswordLength()
  
  createDraft()

 
  passwordSecondDraft = passwordFirstDraft.join("")

  return passwordSecondDraft
   

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
