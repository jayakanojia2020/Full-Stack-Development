let x = 1;

function outer() {
  let x = 2;

  function inner() {
    let x = 3;
    console.log(x); // 3
  }

  inner();
}

outer();

// variables when not intialised
console.log(a); // undefined
var a = 10;

//console.log(b); // ReferenceError
let b = 20;