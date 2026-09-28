const animal = {
    eats: true
};

const dog = Object.create(animal);

dog.name = "Tommy";

console.log(dog.name);
console.log(dog.eats);

/*
For dog.name
dog
│
├── name ✔

For dog.eats
dog
│
└── not found
      │
      ▼
animal
│
└── eats ✔


*/