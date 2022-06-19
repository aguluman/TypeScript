//The mus poweful use of generics comes with using custom types and classes

class CustomCar {
    make: string = 'Generic Car';
    doors: number = 4;
}

class CustomElectricCar extends CustomCar {
    make = 'Electric Car';
    door = 4
}

class CustomTruck extends CustomCar {
    make = 'Truck';
    doors = 2
}

function accelerate<T extends CustomCar> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car
}

let myElectricCar = new CustomElectricCar;
accelerate<CustomElectricCar>(myElectricCar);

let myTruck = new CustomTruck;
accelerate<CustomTruck>(myTruck);


//we can use generic constraints with custom types
//In methandprop.ts i wrote how we can use generic constraints to limit types.
//Generic constraints can not only be applied to native types, but also to classes

//We do this by defining an 'interface' and then using the extend keyword with the type vaiable to extend it.

