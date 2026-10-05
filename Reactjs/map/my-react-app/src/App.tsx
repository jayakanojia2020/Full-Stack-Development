const fruitlist = ['apple', 'banana', 'cherry'];

function App() {
  return (
    <ul>
      {fruitlist.map(fruit => 
        <li key={fruit}>{fruit}</li>
      )}
    </ul>
  );
}
export default App;