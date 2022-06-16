    //Static properties and methods are shared by all instances of a class.

class Car {
    // Properties
        private static numberOfCars: number = 0; // new static property
        private _make: string;
        private _color: string;
        private _doors: number;
    
    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        // this._doors = doors; this was the old way of doing it
        //There was no validaion check here, so the doors are set to any number inputted
        if (doors % 2 === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
        Car.numberOfCars++; //Incremnts the value of the static property
        //that we use the syntax "className.propertyName" instead of "this." when accessing the static property.
    }

    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    protected worker(): string {
        return this._make;
    }
    //You'll notice that there's no function keyword. 
    //This is not required or allowed when defining functions in a class, 
    //so it helps you keep the syntax succinct.

    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }

}

    // Create a new instance of the Car class
    let myCar1 = new Car('Çool Car Comapny', 'crimson', 6); //This line Instantiates the Car object with all parameters
    
    console.log(myCar1.color);
    console.log(myCar1._color);

    //let myCar2 = new Car('Eande F1 Racing Team', 'Black', 5);
    //console.log(myCar2.doors);

    let myCar3 = new Car('Hamilton Motors', 'green and purple', 4);
    console.log(myCar3.doors);

    console.log(myCar3.accelerate(295));
    console.log(myCar3.brake());
    console.log(myCar3.turn('left'));

    console.log(Car.getNumberOfCars());



    //New extension o fthe car class
class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range: number;
    //Constructor
    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }

    //Accessors
    get range() {
        return this._range;
    }

    set range(range) {
        this._range = range;
    }

    //Methods
    charge() {
        console.log(this.worker() + ' is charging');
    }

    //Overriding the brake method of the car class
    brake(): string {
        return `${this.worker()} is braking with the regenrative electric braking system.`
    }	//This is a new method that overrides the brake method of the car class

}

    let myElectricCar = new ElectricCar('Tesla', 'red', 100, 4);
    let spark = new ElectricCar('Spark Motors','silver', 124, 2);
    let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
    console.log(eCar.doors);         // returns the default, 2
    spark.charge();                  // returns "Spark Motors is charging"
    
    console.log(spark.brake());     // returns "Spark Motors is braking with the regenrative electric braking system."




    //you can use an interface to establish a "code contract" that describe 
    //the required properties of an object and their types. 
    //So, you can use an interface to ensure class instance shape

    interface Vehicle {
        make : string;
        color : string;
        doors : number;
        //accelerate : (speed: number) => string;
        accelerate(speed: number): string;
        brake : () => string;
        turn(direction: 'left' | 'right'): string;
        //turn : (direction: 'left' | 'right') => string;
    }

    class Car implements Vehicle {
        ...
    }
