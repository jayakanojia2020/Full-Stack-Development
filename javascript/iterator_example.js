const numbers = [10, 20, 30];
for ( const num of numbers){
    console.log(num);
}

// using iterators
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());