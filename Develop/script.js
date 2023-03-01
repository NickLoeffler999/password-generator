var password = document.getElementById("password");



// This will create a random password with special characters, lower case, upper case, or numeric.
function generatePassword() {
  var num = "0123456789";
  var lowCase = "abcdefghijklmnopqrstuvwxyz";
  var uppCase = lowCase.toUpperCase();
  var specChars = "!@#$%^&*()";
  var chars = "";
  var password = "";
  // These variables will prompt the user for specific information that they can apply to make a password.
  var passwordLength = prompt("Please choose a password length between 8 and 128 characters.");
  // This if statement will provide an alert to the user if they didn't select any criteria.
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You didn't meet the criteria.");
    console.log("You didn't meet the criteria ")
    return; 
  }
    // These variables will send the user through confirmation prompts and store the data they want to use in the password.
  var useLowCase = confirm("Would you like to use lowercase?");
  if (useLowCase) {
    chars += lowCase 
  }
  var useUppCase = confirm("Would you like to use uppercase?");
  if (useUppCase) {
    chars += uppCase
  }
  var useSpecChars = confirm("Would you like to use Special characters?");
  if (useSpecChars) {
    chars += specChars
  }
  var useNum = confirm("Would you like to use numbers?");
  if (useNum) {
    chars += num 
  }
  // This if statement will check through and see if any of the criteria is met, and if none are selected, the user will be prompted again to choose a filter.
  if (useLowCase + useUppCase + useSpecChars + useNum < 1) {
    alert("You need to choose at least one filter.")
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
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
