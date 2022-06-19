// Exercise - Implement generics with interfaces and classes

//How to declare a generic inerface
interface LookAlike<T, U> {
    value: T;
    message: U;
}

// declaring two variables using the identity interface as an object
let returnNumber: LookAlike <number, string> = {
    value: 34,
    message: 'I am Giannis Antetokoumpo'
}

let returnString: LookAlike<string, number> = {
    value : 'My namw is Ja Morant',
    message: 12
}

//how to declare a generic interface as a function type

interface ProcessLookAlike<T, U> {
    (value: T, message: U): T;function
}

function processLookAlike<T, U> (value: T, message: U) : T {
    console.log(message);
    return value;
}

// ':' a colon is used to instantiate an interface
let processor: ProcessLookAlike<number, string> = processLookAlike;

let returnNumber1 = processor(24, 'Chukwuma');
let returnString1= processor(2022, 'I will be funded and employed this 2022');  //Type check error

// how to declare interface as a class type, we can declare a generic interface and implement it in a class

interface ProcessIdentity<T, U> {
value: T;
message: U;
process(): T; // we added a generic signature of a method called process that returns a value of Type T.
}

class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
    //We can use different variable names in the interface and the class because the 
    //type value propagates up the chain and the variable name does not matter
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processor2 = new processIdentity<number, string> (44, 'Lewis Hamilton');
processor2.process(); //Displays lewis hamilton
processor2.value = '44';

//how to define a generic class
    // we can define a generic class without an interface, belwo is how

class processTwins<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }

    getTwins() : T {
        console.log(this._message);
        return this._value
    }
}

let proTwin = new processTwins<number, string>(22, 'Chukwuma Akunyili');
proTwin.getTwins() //Displays my name.
