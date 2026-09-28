console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
/*
After synchronous code finishes:
Microtasks run first:
Promise.then()
Then macrotasks:
setTimeout()
*/