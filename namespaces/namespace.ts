namespace Greetings {
    //we can define function and classes inside namespaces
    //all components within namespace are scoped to the namespace
    //and removed from global scope

    export function returnGreeting (greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`)
    }
}

namespace GreetingsWithLength {
    export function returnGreeting (greeting : string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
        return message.length;
    }
}

//returnGreeting('Hello'); //Return error
Greetings.returnGreeting('Lewis Hamilton Will Rise');
GreetingsWithLength.returnGreeting('Morning');