"use strict";
function greet(name) {
    return "Hello " + name;
}
(function (greet) {
    greet.language = "English";
})(greet || (greet = {}));
console.log(greet("Jaya"));
console.log(greet.language);
