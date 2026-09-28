// rule 1, this belongs to window if its called in the browser
// calls the common node js module {}
console.log(this);

// rule2, inside an object method, this refers to the object.
const person = {
    name: "Jaya",

    greet() {
        console.log(this.name);
    }
};

person.greet();

// rule3, this Inside a Regular Function
function greet() {
    console.log(this);
}
greet(); // undefined if its in strict mode

// rule4, this in Arrow Functions, it will get the value from greet, lexical scope.
const person = {
    name: "Jaya",

    greet() {
        const show = () => {
            console.log(this.name);
        };

        show();
    }
};

person.greet();


// rule4,Compare with a Regular Function
const person = {
    name: "Jaya",

    greet() {
        function show() {
            console.log(this.name);
        }

        show();
    }
};

person.greet();

//Rule 5: this with new
//When you call a function with new, JavaScript creates a new object and sets this to that new object.
function Person(name) {
    this.name = name;
}

const p = new Person("Jaya");

console.log(p.name);