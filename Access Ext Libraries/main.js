"use strict";
//Importing functiosn from two different scripts here
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var result = dotenv_1["default"].config();
var greetings_module_js_1 = require("./greetings_module.js"); //imports a single function in the module
var allGreetingFunctions = require("./greetings_module.js"); //imports all exported  components in the module.
var greetings_utilities_module_1 = require("./greetings-utilities_module");
(0, greetings_module_js_1.returnGreeting)("Osalachi"); // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Morning'); // Displays 'The message from Greetings_module is Bonjour!'
(0, greetings_utilities_module_1.returnGreeting)('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
if (result.error) {
    throw result.error;
}
console.log(result.parsed); // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
