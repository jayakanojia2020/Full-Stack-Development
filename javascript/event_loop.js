console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
/*
while (true) {
    Execute synchronous code

    if (Call Stack is empty) {
        Execute ALL microtasks

        Execute ONE macrotask
    }
}
    */