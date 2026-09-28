function* greet() {
    console.log("Start");

    yield "Hello";

    console.log("Middle");

    yield "World";

    console.log("End");
}

const gen = greet();

console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());