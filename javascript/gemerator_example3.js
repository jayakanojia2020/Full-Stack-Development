function* demo() {
    yield 1;
    yield 2;
    return 3;
}

const gen = demo();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());