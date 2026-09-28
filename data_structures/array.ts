console.log("first array");
let array1: number[] = [1,2,3,4,5];
for( let i = 0; i<5; i++){
    console.log(array1[i]);
}
console.log("second array");
let array2:Array<number> = [1,2,3,4,5];
for( let i of array2){
    console.log(i);
}
console.log("mixed array");
let array3: Array<number|string> = [ "hello", 2, "atlae", 32];
for( let i of array3){
    console.log(i);
}
// push, pop
console.log("Push elements", array3.push("A"));
for( let i of array3){
    console.log(i);
}
console.log("Pop elements", array3.pop());
for( let i of array3){
    console.log(i);
}
// add at the begining
array3.unshift("Rockstar");
console.log("add element at the beginning");
for( let i of array3){
    console.log(i);
}
// remove first element
console.log("remove element from start");
array3.shift();
for( let i of array3){
    console.log(i);
}
console.log("index of 2: ", array3.indexOf(2));
console.log("includes 32 ? ", array3.includes(32));
console.log("slicing from 2 to 3 ", array3.slice(2,3));
console.log(" splicing 2 elements from array1 ", array1.splice(0,2));
console.log("array1 after splice: ");
for( let i of array1){
    console.log(i);
}
// mapping
console.log("mapping elements of array2 ");
console.log(array2.map(x=>x+2));
for( let i of array2){
    console.log(i);
}
console.log("Filtering array2: ", array2.filter(x=> x>3));
console.log("Reducing ", array2.reduce((a,b)=>a+b,0));