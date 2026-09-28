"use strict";
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
const p = new Person("jaya");
p.age = 32;
console.log(p.age);
console.log(p.name);
