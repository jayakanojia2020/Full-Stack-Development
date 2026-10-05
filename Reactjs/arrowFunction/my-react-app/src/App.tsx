// const hello = function() {
//   return "Hello World!";
// }
let hello = () => {
  return "Hello World! (arrow functon)";
}
function App() {

  return (
    <div>
      {hello()}
    </div>
  );
}

export default App;