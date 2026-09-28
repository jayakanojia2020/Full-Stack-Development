interface User {
  name: string;
}

interface User {
  age: number;
}

const person: User = {
  name: "Jaya",
  age: 30
};
// compiler combines it into and make it one
// interface User {
//   name: string;
//   age: number;
// }