function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor.name);
}

@Logger
class Car {}

new Car();