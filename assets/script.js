/*ACCEPTANCE CRITERIA 
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



/* PSEUDO CODE

  1. Button to generate password should call the function to generate the password 
  2. Create functions
        - passWordLenght
        - lowerCase 
        - upperCase
        - numericValue
        - specialCharacters 
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
  
  6. Work on main function generatePassword to call the rest of the functions by using if statments and loops

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
    var lower = window.prompt("Would you like a LOWER case in your password type 1 for yes or 2 for not");
      if(lower === "1"){              // check for the user input
        var lowerAcceptance = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
        return lowerAcceptance
      }
      else if(lower === "2"){         // If the user choses no, then variable will be false 
        var lowerAcceptance = null;
        return lowerAcceptance;
      }
      else{
        window.alert("Invalid input, try again");
        lowerCase();
      }
} // END OF LOWER CASE FUNCTION 

var upperCase = function() {
  var upper = window.prompt("Would you like a UPPER case in your password type 1 for yes or 2 for not");
  if(upper === "1"){                // check for the user input
    var upperAcceptance = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
    return upperAcceptance;
  }
  else if(upper === "2"){         // If the user choses no, then variable will be false 
    var upperAcceptance = null;
    return upperAcceptance;
  }
  else{
    window.alert("Invalid input, try again");
    upperCase();
  }
}  // END OF UPPER CASE FUNCTION 

var numericValue = function() {
  var numeric = window.prompt("Would you like a NUMERIC value in your password type 1 for yes or 2 for not");
  if(numeric === "1"){                // check for the user input
    var numericAcceptance = [0,1,2,3,4,5,6,7,8,9];
    return numericAcceptance;
  }
  else if(numeric === "2"){         // If the user choses no, then variable will be false 
    var numericAcceptance = null;
    return numericAcceptance;
  }
  else{
    window.alert("Invalid input, try again");
    numericValue();
  }
} // END OF NUMERIC VALUE FUNCTION 

var specialCharacters = function() {
  var specialChar = window.prompt("Would you like a SPECIAL CHARACTER in your password type 1 for yes or 2 for not");
  if(specialChar === "1"){                // check for the user input
    var CharAcceptance = `!@#$%^&*()_+=-{[}]:;"'|\<,>.?/`;
    return CharAcceptance;
  }
  else if(specialChar === "2"){         // If the user choses no, then variable will be false 
    var CharAcceptance = null;
    return CharAcceptance;
  }
  else{
    window.alert("Invalid input, try again");
    specialCharacters();
  }
} // END OF SPECIAL CHARACTERS FUNCTION 


var generatePassword = function (){ 


 }


// --------  GLOBAL VARIABLES ------------ 

var passWordLength = lengthPassword();  // Since lengthPassword has a return, it will be save into a global variable
var lower = [lowerCase()];
var upper = [upperCase()];
var numeric = numericValue();
var characters = specialCharacters();


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

