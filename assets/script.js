/* PSEUDO CODE

  1. Button to generate password should call the function to generate the password 
  2. Create an object call userChoice
  3. Then a prompt that will display the password criteria, the variables must be bolean type yes or not to be able to check inside the functions 
      we use var passWordLenght = prompt("Message 1 lenght of the password ") and save it into a variable call passWordLenght
      we use var lowerCase = prompt("Message 2 lowercase ") and save it into a variable call lowerCase
      we use var upperCase = prompt("Message 3 uppercase ") and save it into a variable call upperCase
      we use var numericValue = prompt("Message 4 numeric ") and save it into a variable call numericValue
      we use var specialCharacters = console.prompt("Message 5 &&/|| special characters ") and save it into a variable call specialCharacters 
      check using if statement if the input is valid 
  
  4. According to the user selection a switch statement would fit 
      - switch statement 
        - option 1 will call the function the lenght of the password
        - option 2 will call the function lowercase letters
        - option 3 will call the function uppercase letters
        - option 4 will call the numeric function 
        - option 5 will call the special characters function 
  
  5. Create the respective functions 
        - generatePassword 
        - passWordLenght
        - lowerCase 
        - upperCase
        - numericValue
        - specialCharacters 

*/




// Assignment code here

 const lengthPassword = function(){
  var lengthCharacters = window.prompt("What is the length of your password at least 8 characters and no more than 128 characters");
    if (lengthCharacters < 8 || lengthCharacters > 128){
    window.alert("Invalid input, try again");
    }
 
    lengthPassword();  // It will call the function again to ask the user for a valid input
  }


var generatePassword = function (){

}

var passWordLength = function() {


    return ;
}

passWordLength();


var lowerCase = function() {
  var lower = window.prompt("w");

}

var upperCase = function() {

}

var numericValue = function() {

}

var specialCharacters = function() {

}


var password = function generatePassword(){
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
