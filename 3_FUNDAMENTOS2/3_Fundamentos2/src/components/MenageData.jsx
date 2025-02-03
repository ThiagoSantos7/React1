import { useState } from "react";

const MenageData = () => {
  let someData = 10;

  console.log(someData);

  const [number, setNumber] = useState(15);

  return (
    <>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variavel</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(100)}>Mudar valor</button>
      </div>
    </>
  );
};

export default MenageData;
