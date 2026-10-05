function App(){
  const vehicles = ["mustang", "bmw", "porche"];
  const [car1, car2, car3] = vehicles;
  return(
    <div>
      <h1>
        My Vehicles
      </h1>
      <p> Car model 1: {car1}</p>
      <p> Car model 2: {car2}</p>
      <p> Car model 3: {car3}</p>
    </div>
  );
}
export default App;