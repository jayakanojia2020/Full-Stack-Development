/*
Function Execution Context
Every time a function is called, JavaScript creates a new execution context.
*/
function greet() {
    console.log("Hello");
}

greet();
greet();

/*
Global Context
      ↓
greet() called
      ↓
Create Function Context #1
      ↓
Destroy Context
      ↓
greet() called again
      ↓
Create Function Context #2
      ↓
Destroy Context
*/