// Assignment code here



var password= document.getElementById("password");
var generateBtn = document.querySelector("#generate");


// This will create a random password with special characters, lower case, upper case, or numeric.
function generatePassword() {
  var chars= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 36;
  var password= "";
  // These variables will prompt the user for specific information that they can apply to make a password.
var chars1Length = prompt("Please choose a password length between 8 and 128 characters");
var charsType = prompt("Would you like to use lowercase, uppercase, numeric, and/or special characters?");
// var includeNumbers = prompt("Would you like to go back?")

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
         document.getElementById("password").value = password;
 
  console.log("You have a new password! 🙂");

  return;

}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);
