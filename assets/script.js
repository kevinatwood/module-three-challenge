// Assign Variables
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers  = '1234567890';
var lowerCase = alphabet.split('');
var upperCase = alphabet.toUpperCase().split('');
var specialChar = symbols.split('');
var numChar = numbers.split('');
var passwordOptions= [];


//Generate prompts- if yes, add that array to the options array. Once all options have been selected, enter # of characters. Once all of this is done, for each character, choose one of the selected arrays randomly, then choose a random character from that array. Repeat for the number of characters selected. Then push the text onto the screen

function generateRandomNum(len){

  return Math.floor(Math.random() * len)

 }


function includeLowerCase(){
  var choice = window.confirm("Do you want to include lowercase characters?");

  if (choice){

    passwordOptions.push(lowerCase);
    console.log(passwordOptions);
  }

  }

  function generateRandomNum(len){

   return Math.floor(Math.random() * len)

  }

  function includeUpperCase(){
    var choice = window.confirm("Do you want to include uppercase characters?");
  
    if (choice){
  
      passwordOptions.push(lowerCase);
      console.log(passwordOptions);
    }
  
    }
  
    function generateRandomNum(len){
  
     return Math.floor(Math.random() * len)
  
    }


function generatePassword(){
  
  includeLowerCase()
  var randomArray = generateRandomNum(passwordOptions.length)
  var randomChar = generateRandomNum(passwordOptions[randomArray].length)
  console.log(passwordOptions[randomArray][randomChar])

  
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
