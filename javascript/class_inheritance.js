class Animal{
    eat() {
        console.log("Eat!!");    
    }
}
class Dog extends Animal{
    bark(){
        console.log("Bark!!")
    }
}
const d1 = new Dog();
d1.eat();
d1.bark();