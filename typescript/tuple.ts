let student: [string, number];

student = ["Alice", 101];
console.log(student[0]);

// optional tuple
let user: [string, number?];

user = ["Alice"];
user = ["Bob", 25];
console.log(user[1])

// readonly tuple
let point: readonly [number, number] = [10, 20];

// point[0] = 15; // ❌ Error

// real world example
type Coordinate = [number, number];
const location: Coordinate = [28.6139, 77.2090];