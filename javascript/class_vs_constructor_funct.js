// class and contructor function both results in same output, its just that clases look more clean.
function ConstructorFunction(name){
    this.name = name;
}
ConstructorFunction.prototype.greet = function () {
    console.log("Hi ", this.name);
}
const p1 = new ConstructorFunction("Atlae");
p1.greet();

// class
class Class {
    constructor(name){
        this.cname = name;
    }
    greet(){
        console.log("Hi ",this.name);
    }
}
 const p2 = new Class("Atlae");
 p2.greet();