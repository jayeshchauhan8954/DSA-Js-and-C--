const prompt = require("prompt-sync")();

let character = prompt("Give me a input: ");
let ch = character.charAt();

if (ch >= 97 && ch <= 122) {
  ((cout << "this is lowercase ") << ch) << endl;
} else if (ch >= 65 && ch <= 90) {
  ((cout << "this is uppercase ") << ch) << endl;
} else if (ch >= 48 && ch <= 57) {
  ((cout << "this is positive number ") << ch) << endl;
} else {
  ((cout << "give me valid input ") << ch) << endl;
}
