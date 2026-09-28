class Person {
    constructor(public name: string){

    }
}
interface Person{
    age: number;
}
const p = new Person("jaya");
p.age = 32;
console.log(p.age);
console.log(p.name);