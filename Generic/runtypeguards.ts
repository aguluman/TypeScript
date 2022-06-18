//From methods and property part in learn a thon

//using typeguards with generics
type ValidTypes = string | number;
function identity<T extends ValidTypes, U> (value: T, message: U) { //Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {
        result = value + value;
    } else if (typeof value === 'string') {
        result = value + value;  //i chnaged the '=' to '+' and the ode was fucked up, you can try it out agin just to understand
    }

    console.log (`The message is ${message} and the function returns a ${typeValue} value of  ${result}`);

    return result
}


let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue);
console.log(stringValue);
