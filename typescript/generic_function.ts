
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}

function getBoolean(value: boolean): boolean {
  return value;
}
// best way to write a generic function all the overloading functions above
function getValue<T>(value: T): T {
  return value;
}
// example
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(100));
console.log(identity<boolean>(true));

// with arrays
function getFirstElement<T>(arr: T[]): T|undefined {
  return arr[0];
}

const firstNumber = getFirstElement([10, 20, 30]);
const firstString = getFirstElement(["A", "B", "C"]);

console.log(firstNumber);
console.log(firstString);