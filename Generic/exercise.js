// Exercise - Implement generics with interfaces and classes
// declaring two variables using the identity interface as an object
var returnNumber = {
    value: 34,
    message: 'I am Giannis Antetokoumpo'
};
var returnString = {
    value: 'My namw is Ja Morant',
    message: 12
};
function processLookAlike(value, message) {
    console.log(message);
    return value;
}
// ':' a colon is used to instantiate an interface
var processor = processLookAlike;
var returnNumber1 = processor(24, 'Chukwuma');
var returnString1 = processor(2022, 'I will be funded and employed this 2022'); //Type check error
var processIdentity = /** @class */ (function () {
    function processIdentity(val, msg) {
        this.value = val;
        this.message = msg;
    }
    processIdentity.prototype.process = function () {
        console.log(this.message);
        return this.value;
    };
    return processIdentity;
}());
var processor2 = new processIdentity(44, 'Lewis Hamilton');
processor2.process(); //Displays lewis hamilton
processor2.value = '44';
//how to define a generic class
// we can define a generic class without an interface, belwo is how
var processTwins = /** @class */ (function () {
    function processTwins(value, message) {
        this._value = value;
        this._message = message;
    }
    processTwins.prototype.getTwins = function () {
        console.log(this._message);
        return this._value;
    };
    return processTwins;
}());
var proTwin = new processTwins(22, 'Chukwuma Akunyili');
proTwin.getTwins(); //Displays my name.
