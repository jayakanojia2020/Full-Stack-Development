let message = "Hello";

function outer() {
  let name = "Alice";

  function inner() {
    console.log(message); // Hello
    console.log(name);    // Alice
  }

  inner();
}

outer();