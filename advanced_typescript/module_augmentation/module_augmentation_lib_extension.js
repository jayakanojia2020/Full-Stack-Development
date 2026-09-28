import { Calculator } from "./module_augmentation_lib.js";
//add the runtime implementation using the prototype.
Calculator.prototype.multiply = function (a, b) {
    return a * b;
};
