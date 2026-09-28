interface User {
  name: string;
  age: number;
  email: string;
}

function printUser(user: User) {
  console.log(user.name);
}

function saveUser(user: User) {
  console.log(user.email);
}