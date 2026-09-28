"use strict";

// age = 25   //error, variables must be initlaised
let age = 25;

function show() {
    console.log(this);
}

show(); // it will show undefined instead of window on browser.

// prevents duplicate parameter
// function add(a, a) {
//     return a;
// }
function add(a, b) {
    return a+b;
}

let x = 10;

//delete x; // prevents deleting

// prevents read only property
const obj = {};

Object.defineProperty(obj, "id", {
    value: 100,
    writable: false
});

//obj.id = 200; // cant write