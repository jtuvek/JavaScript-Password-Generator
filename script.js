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