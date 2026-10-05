function App(){
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

return(
  <div>
    <h1>{numbersCombined}</h1>
  </div>
);
}
export default App;