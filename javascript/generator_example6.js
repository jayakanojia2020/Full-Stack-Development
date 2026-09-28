function* first() {
    yield 1;
    yield 2;
}

function* second() {
    yield* first();
    yield 3;
}

for (const n of second()) {
    console.log(n);
}