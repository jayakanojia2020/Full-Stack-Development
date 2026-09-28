for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// it willl print all 4s
// using let for defining the variable
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// using IIFE
for (var n = 1; n <= 3; n++) {
    (function(j){
 setTimeout(function () {
    console.log(j);
  }, 1000);
    })(n);
 
}