class StringBox {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}

class NumberBox {
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

// using generics
class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
  getValue(): T{
    return this.value;
  }
}
const stringBox = new Box<string>("Hello");
const numberBox = new Box<number>(100);
console.log(stringBox.getValue());
console.log(numberBox.getValue());