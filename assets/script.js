/* PSEUDO CODE

  1. Button to generate password should call the function to generate the password 
  2. Then a prompt that will display the password criteria, the variables must be bolean type yes or not to be able to check inside the functions 
      we use var passWordLenght = prompt("Message 1 lenght of the password ") and save it into a variable call passWordLenght
      we use var lowerCase = prompt("Message 2 lowercase ") and save it into a variable call lowerCase
      we use var upperCase = prompt("Message 3 uppercase ") and save it into a variable call upperCase
      we use var numericValue = prompt("Message 4 numeric ") and save it into a variable call numericValue
      we use var specialCharacters = console.prompt("Message 5 &&/|| special characters ") and save it into a variable call specialCharacters 
      check using if statement if the input is valid 
  
  3. According to the user selection a switch statement would fit 
      - switch statement 
        - option 1 will call the function the lenght of the password
        - option 2 will call the function lowercase letters
        - option 3 will call the function uppercase letters
        - option 4 will call the numeric function 
        - option 5 will call the special characters function 
  
  4. Create the respective functions 
        - passWordLenght
        - lowerCase 
        - upperCase
        - numericValue
        - specialCharacters 
        - generatePassword 

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
        var lowerAcceptance = [0];
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
    var upperAcceptance = [0];
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
    var numericAcceptance = '0,1,2,3,4,5,6,7,8,9';
    return numericAcceptance;
  }
  else if(numeric === "2"){         // If the user choses no, then variable will be false 
    var numericAcceptance = false;
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
    var CharAcceptance = false;
    return CharAcceptance;
  }
  else{
    window.alert("Invalid input, try again");
    specialCharacters();
  }
} // END OF SPECIAL CHARACTERS FUNCTION 



var generatePassword = function (){ /* not ready yet */ }





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




// --------  GLOBAL VARIABLES ------------ 

var passWordLength = lengthPassword();  // Since lengthPassword has a return, it will be save into a global variable
var lower = [lowerCase()];
var upper = [upperCase()];
var numeric = numericValue();
var characters = specialCharacters();

