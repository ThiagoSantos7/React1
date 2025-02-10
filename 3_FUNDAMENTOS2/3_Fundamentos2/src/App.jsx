//styles
import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/listRender";
import MenageData from "./components/MenageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const [userName] = useState("Barbara");

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
      <CarDetails brand="VW" km={100000} color="Azul" />
    </div>
  );
}

export default App;
