"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
(function (Color) {
    function print() {
        console.log("Available colors");
    }
    Color.print = print;
})(Color || (Color = {}));
Color.print();
