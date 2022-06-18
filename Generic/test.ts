
//What if you want to determine the type of the values that the 
//array will contain when you call the function and then have 
//TypeScript do the work of type checking the values that you 
//pass to it to ensure they are of that type? 
//This is where generics come into play.

function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                      // OK
numberArray.push('This is not a number');  // Generates a compile time type check error

let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');               // OK
stringArray.push(30);                      // Generates a compile time type check error

console.log(numberArray);
console.log(stringArray);