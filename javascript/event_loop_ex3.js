console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => {
    console.log(4);
});

console.log(5);

/*
Execution order:

Synchronous code → 1, 5
Microtasks → 3, 4
Macrotasks → 2
*/