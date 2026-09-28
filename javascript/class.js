class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log("object created, constructor called!")
    }
    greet(){
        console.log("Hi ", this.name);
    }
    
}

let P1 = new Person("jaya", 32);
P1.greet();
let P2 = new Person();
P2.greet();
console.log(P1.age);
console.log(P2.age);
console.log("P1 doesnt own the property.");
// its stored in Person.prototype.greet
console.log(P1.hasOwnProperty("greet"));