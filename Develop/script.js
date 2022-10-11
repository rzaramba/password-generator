// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var characters = parseInt(
    window.prompt(
      "How many characters would you like password to be (btwn 8-128)?"
    )
  );

  if (characters < 8 || characters > 128 || isNaN(characters)) {
    window.alert("Invalid response");
    return "Need characters to be between 8-128. Please try again";
  }

  var number = window.confirm(
    "Do you want to include numbers? \n Click OK for YES and Cancel for NO"
  );

  var upperCase = window.confirm(
    "Do you want to include uppercase letters? \n Click OK for YES and Cancel for NO"
  );

  var lowerCase = window.confirm(
    "Do you want to include lowercase letters? \n Click OK for YES and Cancel for NO"
  );

  var specialCharacter = window.confirm(
    "Do you want to include special characters? \n Click OK for YES and Cancel for NO"
  );

  if (
    number == false &&
    lowerCase == false &&
    upperCase == false &&
    specialCharacters == false
  ) {
    window.alert("Invalid response");
    return "Cannot generate password. Please try again";
  }

  var generatedPassword = "";
  var numbers = "0123456789";
  var lowerCaseletters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "~!@#$%^&*()_?+=<>";

  if (number == true) {
    generatedPassword = generatedPassword + numbers;
  }

  if (lowerCase == true) {
    generatedPassword = generatedPassword + lowerCaseletters;
  }

  if (upperCase == true) {
    generatedPassword = generatedPassword + upperCaseLetters;
  }

  if (specialCharacter == true) {
    generatedPassword = generatedPassword + specialCharacters;
  }

  var finalPassword = "";
  for (let i = 0; i < characters; i++) {
    let randomIndex = Math.floor(Math.random() * generatedPassword.length);
    let randomCharacter = generatedPassword.charAt(randomIndex);

    finalPassword = finalPassword + randomCharacter;
  }

  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
