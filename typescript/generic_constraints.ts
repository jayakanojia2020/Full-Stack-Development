function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));
// keyoff
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  name: "Alice",
  age: 25,
};

console.log(getProperty(user, "name")); // ✅
// getProperty(user, "salary"); // ❌ Error

// arrow function
const identity = <T>(value: T): T => {
  return value;
};

console.log(identity(100));