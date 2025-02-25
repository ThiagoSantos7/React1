import { useState } from "react";
import "./App.css";
import CarDetails from "./components/carDetails";

function App() {
  const [car] = useState([
    { id: 1, marca: "VW", km: 100000, color: "Blue" },
    { id: 2, marca: "Chevrolet", km: 0, color: "Red" },
    { id: 3, marca: "Fiat", km: 150000, color: "Green" },
  ]);
  return (
    <>
      <h1>Challenge CSS</h1>
      {car.map((cars) => (
        <CarDetails
          key={cars.id}
          brand={cars.marca}
          km={cars.km}
          cor={cars.color}
        />
      ))}
    </>
  );
}

export default App;
