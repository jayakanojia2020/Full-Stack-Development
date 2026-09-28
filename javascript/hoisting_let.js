console.log(a); //variable a hoisted, it has the memory but cannot acces as its in the temporal dead started

let a = 10;
// temporal dead zone ended
console.log(a);