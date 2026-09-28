class Car {
    constructor(public brand: string){}
}

namespace Car {
    export const wheels = 4;
}

console.log(Car.wheels);