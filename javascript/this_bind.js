function greet() {
    console.log(this.name);
}

const person = {
    name: "Jaya"
};

const boundGreet = greet.bind(person);
//bind() returns a new function with this permanently set.
boundGreet(); 