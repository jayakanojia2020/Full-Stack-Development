interface Dog{
    bark(): string;
}
interface Cat{
    meow(): string;
}
function isDog(animal: Dog|Cat): animal is Dog{
    return "bark" in animal;
}
function isCat(animal: Dog| Cat): animal is Cat{
    return "meow" in animal;
}
function makeSound(animal: Dog|Cat){
    if(isCat(animal)){
        return animal.meow();
    }
    else{
        return animal.bark();
    }
}
let cat1: Cat = {
    meow: () =>  "meow"
};
let dog1: Dog = {
    bark: () =>  "bark"
};

console.log(makeSound(cat1));
console.log(makeSound(dog1));