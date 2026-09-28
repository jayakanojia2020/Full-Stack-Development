/*
Global Execution Context (GEC)
When a JavaScript file starts running, JavaScript creates the Global Execution Context.
It is created only once.
*/
let name = "Jaya";

function greet() {
    console.log("Hello");
}

console.log(name);

/*
Before code runs, javascript creates GEC
Global Execution Context

Variables:
name → undefined

Functions:
greet → function

this → window (Browser)
this → global (Node.js)
*/