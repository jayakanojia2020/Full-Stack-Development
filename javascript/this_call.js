function greet() {
    console.log(this.name);
}

const person = {
    name: "Jaya"
};

greet.call(person);
// call explicitly set the value of this