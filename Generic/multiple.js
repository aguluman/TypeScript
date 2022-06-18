//Multiple type varable in generic typescript
//We use <T, U> to create a generic type that takes two type variables.
function identity(value, message) {
    console.log(message);
    return value;
}
var returnNumber = identity(5, 'Hello');
var returnString = identity('Hello', '34');
var returnBoolean = identity(true, 'Egó Olé');
returnNumber = returnNumber * 1000; //OK
returnString = returnString * 20; //Error
returnBoolean = returnBoolean * 20; //Error
console.log(returnNumber);
console.log(returnString);
console.log(returnBoolean);
