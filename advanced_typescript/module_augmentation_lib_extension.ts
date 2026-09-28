import { Calculator } from "./module_augmentation_lib.js";
declare module "./module_augmentation_lib"{ // extend the type using declare module
    interface Calculator {
        multiply(a: number, b: number): number;
    }
}
//add the runtime implementation using the prototype.
Calculator.prototype.multiply = function(a,b){
    return a*b;
}