// //Using method and properties of a generc type
// function identity<T, U> (value: T, message: U) : T {
//     let result: T = value + value; //Error
//     console.log(message);
//     return result
// }
// // Using generic constraints to limit types
// type ValidTypes = string | number;
// function secondIdentity<T extends ValidTypes, U> (value: T, message: U) : T {
//     let result: T = value + value; //Error
//     console.log(message);
//     return result
// }
// let returnNumber = identity<number, string>(100, "Hello");
// let returnString = identity<string, string>('100', 'Hola!');     
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!');
// how to constrain a type to the property of another object
function getPets(pet, key) {
    return pet[key];
}
var pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
var pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };
console.log(getPets(pets1, "fish"));
console.log(getPets(pets2, 4));
