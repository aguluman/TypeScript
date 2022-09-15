var Greetings;
(function (Greetings) {
    //we can define function and classes inside namespaces
    //all components within namespace are scoped to the namespace
    //and removed from global scope
    function returnGreeting(greeting) {
        console.log("The message from namespace Greetings is ".concat(greeting, "."));
    }
    Greetings.returnGreeting = returnGreeting;
})(Greetings || (Greetings = {}));
var GreetingsWithLength;
(function (GreetingsWithLength) {
    function returnGreeting(greeting) {
        var greetingLength = getLength(greeting);
        console.log("The message from namespace GreetingsWithLength is ".concat(greeting, ". It is ").concat(greetingLength, " characters long."));
    }
    GreetingsWithLength.returnGreeting = returnGreeting;
    function getLength(message) {
        return message.length;
    }
})(GreetingsWithLength || (GreetingsWithLength = {}));
//returnGreeting('Hello'); //Return error
Greetings.returnGreeting('Lewis Hamilton Will Rise');
GreetingsWithLength.returnGreeting('Morning');
