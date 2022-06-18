//From methods and property part in learn a thon
function identity(value, message) {
    var result = '';
    var typeValue = typeof value;
    if (typeof value === 'number') {
        result = value + value;
    }
    else if (typeof value === 'string') {
        result = value + value;
    }
    console.log("The message is ".concat(message, " and the function returns a ").concat(typeValue, " value of  ").concat(result));
    return result;
}
var numberValue = identity(100, 'Hello');
var stringValue = identity('100', 'Hello');
console.log(numberValue);
console.log(stringValue);
//====================================================================================================================//
// type ValidTypes = string | number;
// function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
//     let result: ValidTypes = '';
//     let typeValue: string = typeof value;
//     if (typeof value === 'number') {           // Is it a number?
//         result = value + value;                // OK
//     } else if (typeof value === 'string') {    // Is it a string?
//         result = value + value;                // OK
//     }
//     console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
//     return result
// }
// let numberValue = identity<number, string>(100, 'Hello');
// let stringValue = identity<string, string>('100', 'Hello');
// console.log(numberValue);       // Returns 200
// console.log(stringValue);       // Returns 100100
