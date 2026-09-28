function* greet() {

    const name = yield "What is your name?";

    yield `Hello ${name}`;
}

const gen = greet();

console.log(gen.next().value);
console.log(gen.next("Jaya").value);