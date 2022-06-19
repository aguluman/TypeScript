//The mus poweful use of generics comes with using custom types and classes
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
var CustomCar = /** @class */ (function () {
    function CustomCar() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
    return CustomCar;
}());
var CustomElectricCar = /** @class */ (function (_super) {
    __extends(CustomElectricCar, _super);
    function CustomElectricCar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.make = 'Electric Car';
        _this.door = 4;
        return _this;
    }
    return CustomElectricCar;
}(CustomCar));
var CustomTruck = /** @class */ (function (_super) {
    __extends(CustomTruck, _super);
    function CustomTruck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.make = 'Truck';
        _this.doors = 2;
        return _this;
    }
    return CustomTruck;
}(CustomCar));
function accelerate(car) {
    console.log("All ".concat(car.doors, " doors are closed."));
    console.log("The ".concat(car.make, " is now accelerating!"));
    return car;
}
var myElectricCar = new CustomElectricCar;
accelerate(myElectricCar);
var myTruck = new CustomTruck;
accelerate(myTruck);
