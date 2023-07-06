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
var upperCaseBoolean ;
var lowerCaseBoolean ;
var numBoolean;
var specialCharBoolean ;
var passwordSecondDraft ;

//Get random number
function generateRandomNum(len) {

  return Math.floor(Math.random() * len)

}


//Prompts user to choose what kind of characters they want in their password

function includeLowerCase() {

  var choice = window.confirm("Do you want to include lowercase characters? (Press OK for yes, Cancel for no)");

  if (choice) {
    passwordOptions.push(lowerCase);
  }

}

function includeUpperCase() {
  var choice = window.confirm("Do you want to include uppercase characters? (Press OK for yes, Cancel for no)");

  if (choice) {

    passwordOptions.push(upperCase);
  }

}

function includeSpecialChar() {
  var choice = window.confirm("Do you want to include special characters? (Press OK for yes, Cancel for no)");

  if (choice) {

    passwordOptions.push(specialChar);
  }

}

function includeNumChar() {
  var choice = window.confirm("Do you want to include numerical characters? (Press OK for yes, Cancel for no)");

  if (choice) {

    passwordOptions.push(numChar);
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

// Check if all characters are represented in password 


function checkUpperCase(){
  var hasUpperCase = false;
  for (let i = 0; i < upperCase.length; i++){
  if (passwordFirstDraft.includes(upperCase[i])){
    hasUpperCase = true;
    return hasUpperCase;
  } 
  }
  return hasUpperCase;
}

function checkLowerCase(){
  var hasLowerCase = false;
  for (let i = 0; i < lowerCase.length; i++){
  if (passwordFirstDraft.includes(lowerCase[i])){
    hasLowerCase = true;
    return hasLowerCase;
  } 
  }
  return hasLowerCase;
}

function checkNum(){
  var hasNum = false;
  for (let i = 0; i < numChar.length; i++){
  if (passwordFirstDraft.includes(numChar[i])){
    hasNum = true;
    return hasNum;
  } 
  }
  return hasNum;
}

function checkSpecialChar(){
  var hasSpecialChar = false;
  for (let i = 0; i < specialChar.length; i++){
  if (passwordFirstDraft.includes(specialChar[i])){
    hasSpecialChar = true;
    return hasSpecialChar;
  } 
  }
  return hasSpecialChar;
}

function initializeFunctions(){
    passwordOptions = [];
  
  includeLowerCase()
  includeUpperCase()
  includeSpecialChar()
  includeNumChar()
  passwordLength = getPasswordLength()
}

function createDraft() {
  passwordFirstDraft = [];
  for (let i = 0; i < passwordLength; i++) {
  var randomArray = generateRandomNum(passwordOptions.length)
  var randomChar = generateRandomNum(passwordOptions[randomArray].length)
  var randomText = passwordOptions[randomArray][randomChar]
  passwordFirstDraft.push(randomText)

}
}

function checkPassword(){
  upperCaseBoolean = checkUpperCase()
  lowerCaseBoolean = checkLowerCase()
  numBoolean= checkNum()
  specialCharBoolean = checkSpecialChar()

  console.log(upperCaseBoolean, lowerCaseBoolean, numBoolean, specialCharBoolean)

 
  }
function makePassword(){
  createDraft()

  checkPassword()
  
}
//Generate a password from the options that the user selected
function generatePassword() {

  initializeFunctions()

  makePassword()

  if (upperCaseBoolean && lowerCaseBoolean && numBoolean && specialCharBoolean){
     passwordSecondDraft = passwordFirstDraft.join("")

    return passwordSecondDraft
   } else {
  //  createDraft()
  //  checkPassword()
  //   return passwordSecondDraft
   makePassword()
  console.log(passwordSecondDraft)
  return passwordSecondDraft
   }

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
