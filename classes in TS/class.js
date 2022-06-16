//Static properties and methods are shared by all instances of a class.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    // Constructor
    function Car(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        this._make = make;
        this._color = color;
        // this._doors = doors; this was the old way of doing it
        //There was no validaion check here, so the doors are set to any number inputted
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
        Car.numberOfCars++; //Incremnts the value of the static property
        //that we use the syntax "className.propertyName" instead of "this." when accessing the static property.
    }
    Object.defineProperty(Car.prototype, "make", {
        // Accessors
        get: function () {
            return this._make;
        },
        set: function (make) {
            this._make = make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return 'The color of the car is ' + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            if ((doors % 2) === 0) {
                this._doors = doors;
            }
            else {
                throw new Error('Doors must be an even number');
            }
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    Car.prototype.accelerate = function (speed) {
        return "".concat(this.worker(), " is accelerating to ").concat(speed, " MPH.");
    };
    Car.prototype.brake = function () {
        return "".concat(this.worker(), " is braking with the standard braking system.");
    };
    Car.prototype.turn = function (direction) {
        return "".concat(this.worker(), " is turning ").concat(direction);
    };
    // This function performs work for the other method functions
    Car.prototype.worker = function () {
        return this._make;
    };
    //You'll notice that there's no function keyword. 
    //This is not required or allowed when defining functions in a class, 
    //so it helps you keep the syntax succinct.
    Car.getNumberOfCars = function () {
        return Car.numberOfCars;
    };
    // Properties
    Car.numberOfCars = 0; // new static property
    return Car;
}());
// Create a new instance of the Car class
var myCar1 = new Car('Çool Car Comapny', 'crimson', 6); //This line Instantiates the Car object with all parameters
console.log(myCar1.color);
console.log(myCar1._color);
//let myCar2 = new Car('Eande F1 Racing Team', 'Black', 5);
//console.log(myCar2.doors);
var myCar3 = new Car('Hamilton Motors', 'green and purple', 4);
console.log(myCar3.doors);
console.log(myCar3.accelerate(295));
console.log(myCar3.brake());
console.log(myCar3.turn('left'));
console.log(Car.getNumberOfCars());
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    //Constructor
    function ElectricCar(make, color, range, doors) {
        if (doors === void 0) { doors = 2; }
        var _this = _super.call(this, make, color, doors) || this;
        _this._range = range;
        return _this;
    }
    Object.defineProperty(ElectricCar.prototype, "range", {
        //Accessors
        get: function () {
            return this._range;
        },
        set: function (range) {
            this._range = range;
        },
        enumerable: false,
        configurable: true
    });
    //Methods
    ElectricCar.prototype.charge = function () {
        console.log(this.worker() + ' is charging');
    };
    //Overriding the brake method of the car class
    ElectricCar.prototype.brake = function () {
        return "".concat(this.worker(), " is braking with the regenrative electric braking system.");
    }; //This is a new method that overrides the brake method of the car class
    return ElectricCar;
}(Car));
var myElectricCar = new ElectricCar('Tesla', 'red', 100, 4);
var spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
var eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with the regenrative electric braking system."
