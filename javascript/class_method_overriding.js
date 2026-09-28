class Animal{
    speak(){
        console.log("some sound");
    }
}
class Dog extends Animal{
    speak(){
        console.log("Bark!!");
        }
}
const d1 = new Dog();
d1.speak();