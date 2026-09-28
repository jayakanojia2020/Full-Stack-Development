type Dog = {
  bark: () => void;
  
};

type Cat = {
  meow: () => void;
};

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}