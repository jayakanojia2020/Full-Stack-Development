function* numbers() {
    yield 1;
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());