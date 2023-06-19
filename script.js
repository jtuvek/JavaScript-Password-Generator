// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password
function generatePassword() {
  var passwordLength = getPasswordLength();
  var characterTypes = getCharacterTypes();

  if (passwordLength === null || characterTypes.length === 0) {
    alert("Please select at least one character type and specify the password length.");
    return "";
  }

var password = "";
var availableCharacters = "";

if (characterTypes.includes("lowercase")) {
  availableCharacters += "abcdefghijklmnopqrstuvwxyz";
}

if (characterTypes.includes("uppercase")) {
  availableCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if (characterTypes.includes("numeric")) {
  availableCharacters += "0123456789";
}

if (characterTypes.includes("special")) {
  availableCharacters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
}

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * availableCharacters.length);
  password += availableCharacters.charAt(randomIndex);
}

return password;
}

// Function to prompt for password length
function getPasswordLength() {
  var length = prompt("Enter the desired password length (between 8 and 128 characters):");

  if (length === null) {
    return null;
  }

  length = parseInt(length);

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return getPasswordLength();
  }

  return length;
}

// Function to prompt for character types
function getCharacterTypes() {
  var characterTypes = [];
  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  if (lowercase || uppercase || numeric || special) {
    if (lowercase) {
      characterTypes.push("lowercase");
    }
  
    if (uppercase) {
      characterTypes.push("uppercase");
    }
  
    if (numeric) {
      characterTypes.push("numeric");
    }
  
    if (special) {
      characterTypes.push("special");
    }
  } else {
    alert("Please select at least one character type.");
    return getCharacterTypes();
  }

  return characterTypes;
}