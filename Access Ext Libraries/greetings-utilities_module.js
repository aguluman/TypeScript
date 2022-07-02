"use strict";
exports.__esModule = true;
exports.returnGreeting = void 0;
//Exporting a module in TypeScript
function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The Message from GreetingsLength_module is ".concat(greeting, ". \nIt is ").concat(greetingLength, " characters long."));
}
exports.returnGreeting = returnGreeting;
function getLength(message) {
    return message.length;
}
