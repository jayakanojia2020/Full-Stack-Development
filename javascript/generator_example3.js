function* idGenerator() {

    let id = 1;

    while (true) {
        yield id++;
    }

}

const ids = idGenerator();

console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);