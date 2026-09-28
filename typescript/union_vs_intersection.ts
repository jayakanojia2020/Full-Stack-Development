// Union
type A = { name: string };
type B = { age: number };

type Union = A | B;

// Valid
const u1: Union = { name: "Alice" };
const u2: Union = { age: 25 };

// Intersection
type Person = A & B;

// Must have both properties
const p: Person = {
  name: "Alice",
  age: 25,
};