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
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  const [userName] = useState("Barbara");

  const cars = [
    { id: 1, brand: "Ferrari", cor: "Vermelha", newCar: true, km: 0 },
    { id: 2, brand: "KIA", cor: "Azul", newCar: false, km: 10000 },
    { id: 3, brand: "Chevrolet", cor: "Prata", newCar: false, km: 23444 },
  ];

  const ShowMessage = () => {
    console.log("Evento do componente pai!");
  };

  const [message, setMessage] = useState("");

  function handleMessage(msg) {
    setMessage(msg);
  }

  const users = [
    { id: 1, name: "Thiago", age: 19, job: "Front End" },
    { id: 2, name: "Pablo", age: 21, job: "Back End" },
    { id: 3, name: "Kaio", age: 16, job: "Estudante" },
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
          key={car.id}
          brand={car.brand}
          color={car.cor}
          newCar={car.newCar}
          km={car.km}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="Test" />
      {/* Children */}
      <Container myValue="Test">
        <p>conteudo</p>
      </Container>
      <Container myValue="Test2">
        <h4>Este é mais um teste</h4>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={ShowMessage} />
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Desafio */}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </div>
  );
}

export default App;
