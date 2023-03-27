// Assignment code here
function passwordLength() {
  var length = prompt("How many characters long should the password be?", "Length")
  length = parseFloat(length)
  // ensure that length is more than 8 and less than 128
  if (length >= 8 && length <= 128) {
    return length;
  }
  else {
    alert("Password must be between 8 and 128 charaters in length");
    // if an incorrect value is entered re-run the function
    return;
  }
}

// confirm() function that returns a boolean
function yesNoAlert(prompt) {
  if (confirm(prompt + "\nClick 'OK' for Yes or 'Cancel' for No")) {
    return true;
  } else {
    return false;
  };
};
// returns a random lowercase letter
function getRandomLower() {
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // random index for the array above
  var char = lowerArray[Math.floor(Math.random() * lowerArray.length)];
  return char;
};
// returns a random uppercase letter
function getRandomUpper() {
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // random index for the array above
  var char = upperArray[Math.floor(Math.random() * upperArray.length)];
  return char;
};
// returns a random number between zero and nine
function getRandomNum() {
  var char = Math.floor(Math.random() * 10);;
  return char;
};
// returns a random special character
function getRandomSpecial() {
  var specialArray = ["\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027", "\u0028", "\u0029", "\u002A", "\u002B", "\u002C", "\u002D", "\u002E", "\u002F", "\u003A", "\u003B", "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F", "\u0060", "\u007B", "\u007C", "\u007D", "\u007E"]
  var char = specialArray[Math.floor(Math.random() * specialArray.length)];
  return char;
};

function generatePassword() {
  // alerts to ask for password criteria
  //length alert
  var length = passwordLength();
  // stops code execution if password length wasn't the correct size
  if (!length) {
    return ("");
  }

  // character type alerts
  // lowercase alert
  var lowercase = yesNoAlert("Include LOWERCASE characters?");
  // uppercase alert
  var uppercase = yesNoAlert("Include UPPERCASE characters?")
  // number alert
  var numbers = yesNoAlert("Include NUMERIC characters?")
  // special character alert
  var specialChar = yesNoAlert("Include SPECIAL CHARACTERS?")

  // if all criteria are false return an error
  if (!lowercase && !uppercase && !numbers && !specialChar) {
    alert("At least one criteria must be selected")
    return ("");
  }

  // creating password
  var password = []
  for (var i = 0; i < length; i++) {
    var char;
    // pick a random number between one and four to run the correct character function
    var randomFunction = Math.floor(Math.random() * 4)
    // if the number equals ... then check if the password should contain that character, if false then subtract one from i
    if (randomFunction === 0) {
      if (lowercase) {
        char = getRandomLower();
        password.push(char);
      } else {
        i--;
      }
    } else if (randomFunction === 1) {
      if (uppercase) {
        char = getRandomUpper();
        password.push(char);
      } else {
        i--;
      }
    } else if (randomFunction === 2) {
      if (numbers) {
        char = getRandomNum();
        password.push(char);
      } else {
        i--;
      }
    } else if (randomFunction === 3) {
      if (specialChar) {
        char = getRandomSpecial();
        password.push(char);
      } else {
        i--;
      }
    }
  }
  password = password.join("");
  return password;
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
