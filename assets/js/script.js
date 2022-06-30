/*                                          ACCEPTANCE CRITERIA 


GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/



/*                                            PSEUDO CODE


  1. Button to generate password should call the function to generate the password 
 
  2. Create functions
        - passWordLenght
        - lowerCase 
        - upperCase
        - numericValue
        - specialCharacters
        - randomValues 
        - generatePassword

  3. Then prompt 
      var passWordLenght = prompt("Message 1 lenght of the password ") 
      var lowerCase = prompt("Message 2 lowercase ") 
      var upperCase = prompt("Message 3 uppercase ") 
      var numericValue = prompt("Message 4 numeric ") 
      var specialCharacters = console.prompt("Message 5 &&/|| special characters ") 
  
  4. If statements inside the prompts
        - option 1 will call the function the lenght of the password
        - option 2 will call the function lowercase letters
        - option 3 will call the function uppercase letters
        - option 4 will call the numeric function 
        - option 5 will call the special characters function 
  
  5. Create and empty array which will include every lowercase, uppercase, numeric value and/or special characters
     by using a loop inside of an if statement that will check for true values and then append the result into the
     empty array 
  
  // 6. Lastly we do a random loop to combine everything in the array that contains the criteria according to the user criteria and length
     of password 

  7. Work on main function generatePassword which only will call all the functions.


*/


// CHECKING PROMPT FUNCTIONS 

var lengthPassword = function(){
  var lengthCharacters = window.prompt("What is the length of your password at least 8 characters and no more than 128 characters");
    if (lengthCharacters < 8 || lengthCharacters > 128){
    window.alert("Invalid input, try again");
    lengthPassword(); // It will call the function again to ask the user for a valid input
    }

  return lengthCharacters;
} // END OF LENGTH PASSWORD FUNCTION 

var lowerCase = function() {
    var lower = window.prompt("Would you like a LOWER case in your password type 1 for yes or 0 for not");
      if(lower === "1"){              // check for the user input
        var lowerAcceptance = true; 
        return lowerAcceptance
      }
      else if(lower === "0"){         // If the user choses no, then variable will be false 
        var lowerAcceptance = false;
        return lowerAcceptance;
      }
      else{
        window.alert("Invalid input, try again");
        lowerCase();
      }
} // END OF LOWER CASE FUNCTION 

var upperCase = function() {
  var upper = window.prompt("Would you like a UPPER case in your password type 1 for yes or 0 for not");
  if(upper === "1"){                // check for the user input
    var upperAcceptance = true;
    return upperAcceptance;
  }
  else if(upper === "0"){         // If the user choses no, then variable will be false 
    var upperAcceptance = false;
    return upperAcceptance;
  }
  else{
    window.alert("Invalid input, try again");
    upperCase();
  }
}  // END OF UPPER CASE FUNCTION 

var numericValue = function() {
  var numeric = window.prompt("Would you like a NUMERIC value in your password type 1 for yes or 0 for not");
  if(numeric === "1"){                // check for the user input
    var numericAcceptance = true; 
    return numericAcceptance;
  }
  else if(numeric === "0"){         // If the user choses no, then variable will be false 
    var numericAcceptance = false;
    return numericAcceptance;
  }
  else{
    window.alert("Invalid input, try again");
    numericValue();
  }
} // END OF NUMERIC VALUE FUNCTION 

var specialCharacters = function() {
  var specialChar = window.prompt("Would you like a SPECIAL CHARACTER in your password type 1 for yes or 0 for not");
  if(specialChar === "1"){                // check for the user input
    var CharAcceptance = true; 
    return CharAcceptance;
  }
  else if(specialChar === "0"){         // If the user choses no, then variable will be false 
    var CharAcceptance = false;
    return CharAcceptance;
  }
  else{
    window.alert("Invalid input, try again");
    specialCharacters();
  }
} // END OF SPECIAL CHARACTERS FUNCTION 

var randomValues = function (){

  var numberChars = lengthPassword();
  var arrayOfAllValues = [];
  var specialCharArray = [];


  // UPPER CASE LOOP

  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if(upperCase()) {
    for( let i = 0; i < numberChars; i++){
      arrayOfAllValues.push(upper.charAt(Math.floor(Math.random() * upper.length)));
    };
    arrayOfAllValues.push(...specialCharArray);
  };


  // LOWER CASE LOOP

  var lower = 'abcdefghijklmnopqrstuvwxyz';

  if(lowerCase()) {
    for( let i = 0; i < numberChars; i++){
      arrayOfAllValues.push(lower.charAt(Math.floor(Math.random() * lower.length)));
    };
    //arrayOfAllValues.join('');
    arrayOfAllValues.push(...specialCharArray);
  };


  // NUMERIC CASE LOOP
    
  var numeric = '0123456789';

  if(numericValue()){
    for( let i = 0; i < numberChars; i++){
      arrayOfAllValues.push(numeric.charAt(Math.floor(Math.random() * numeric.length)));
    };
    arrayOfAllValues.push(...specialCharArray);
  };


  //SPECIAL CHARACTER LOOP

  var characters = `!@#$%^&*()_+=-{[}]:;"'|\\<,>.?/`;

  if(specialCharacters()){
    
      for( let i = 0; i < numberChars; i++){
        arrayOfAllValues.push(characters.charAt(Math.floor(Math.random() * characters.length)));
      };
    arrayOfAllValues.push(...specialCharArray); // ... it takes the content of the array without affecting the actual array "shallow copy"
  };



  // FINAL ARRAY LOOP 

  var finalArray = [];
  var stringAllValues = arrayOfAllValues.join('');

  for( let i = 0; i < numberChars; i++){
    finalArray.push(stringAllValues.charAt(Math.floor(Math.random() * stringAllValues.length)));
  };

  return finalArray.join('');


}; // END OF RANDOM VALUES


// STARTS THE MAIN FUNCTION GENERATE PASSWORD

var generatePassword = function (){ 

return randomValues();


} // END OF GENERATE PASSWORD FUNCTION



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
