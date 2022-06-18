//Multiple type varable in generic typescript
//We use <T, U> to create a generic type that takes two type variables.

function identity<T, U>(value: T, message: U): T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(5, 'Hello');
let returnString = identity<string, string>('Hello', '34');
let returnBoolean = identity<boolean, string>(true, 'Egó Olé');

returnNumber = returnNumber * 1000; //OK
returnString = returnString * 20; //Error
returnBoolean = returnBoolean * 20; //Error

console.log(returnNumber);
console.log(returnString);
console.log(returnBoolean);