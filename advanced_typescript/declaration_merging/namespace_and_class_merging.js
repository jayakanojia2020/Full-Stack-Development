"use strict";
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
}
(function (Car) {
    Car.wheels = 4;
})(Car || (Car = {}));
console.log(Car.wheels);
