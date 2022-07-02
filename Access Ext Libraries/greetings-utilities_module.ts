//Exporting a module in TypeScript
export function returnGreeting (greeting: string)
{
    let greetingLength = getLength(greeting);
    console.log(`The Message from GreetingsLength_module is ${greeting}. \nIt is ${greetingLength} characters long.`);
}
function getLength(message: string): number {
    return message.length
}

