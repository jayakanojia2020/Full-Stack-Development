const person = {
    name: "John"
};

console.log(Object.getPrototypeOf(person));
console.log(person.toString());
/*
person doesn't have a toString() method, so JavaScript looks in:

person
Object.prototype
null
*/