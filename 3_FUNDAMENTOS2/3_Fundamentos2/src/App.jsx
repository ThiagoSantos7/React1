//styles
import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/listRender";
import MenageData from "./components/MenageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";

function App() {
  const [userName] = useState("Barbara");

  const cars = [
    { id: 1, brand: "Ferrari", cor: "Vermelha", newCar: true, km: 0 },
    { id: 1, brand: "KIA", cor: "Azul", newCar: false, km: 10000 },
    { id: 1, brand: "Chevrolet", cor: "Prata", newCar: false, km: 23444 },
  ];

  return (
    <div className="App">
      <h1>Avançando em react</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <MenageData />
      <ListRender />
      <CondicionalRender />
      {/* Props */}
      <ShowUserName name={userName} />
      {/* Destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* Reaproveitamento */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={true} />
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* Loop em array de objects */}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.cor}
          newCar={car.newCar}
          km={car.km}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="Test" />
    </div>
  );
}

export default App;
