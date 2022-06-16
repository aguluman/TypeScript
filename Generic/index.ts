function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);
stringArray.push('Mice');
numberArray.push('This is not a number');
stringArray.push(30);

console.log(numberArray);
console.log(stringArray);