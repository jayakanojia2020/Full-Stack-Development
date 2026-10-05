class Car {
  brand: string;

  constructor(name: string) {
    this.brand = name;
  }

  present(): string {
    return "I have a " + this.brand;
  }
}

function App() {
  const myCar = new Car("Ford");

  return (
    <div>
      <h1>{myCar.present()}</h1>
    </div>
  );
}

export default App;