function App() {
  const strings = ["Hello", "World"];

const [first, second] = strings;

return <h1>{first + " " + second}</h1>;
}
export default App;